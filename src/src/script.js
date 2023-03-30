
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

const textArea1 = document.getElementById("orignal_content");
const wordCount1 = document.getElementById("word-count1");
textArea1.addEventListener("input", function () {
    const words = this.value.trim().split(/\s+/);
    wordCount1.textContent = `Word count: ${words.length}`;
});

const textArea2 = document.getElementById("generated_content");
const wordCount2 = document.getElementById("word-count2");
textArea2.addEventListener("input", function () {
    const words = this.value.trim().split(/\s+/);
    wordCount2.textContent = `Word count: ${words.length}`;
});

var reportsDropdown = document.getElementById("reports");
var downloadButton = document.getElementById("download-button");
var fromDateInput = document.getElementById("from-date");
var toDateInput = document.getElementById("to-date");
var fileFormatDropdown = document.getElementById("file-format");

function showSubDropdown() {
    const reportsDropdown = document.getElementById("reports");
    const subDropdownContainer = document.getElementById(
        "sub-dropdown-container"
    );
    const subDropdown = document.getElementById("sub-reports");

    subDropdown.innerHTML = ""; // reset sub-dropdown options

    if (reportsDropdown.value === "reading") {
        subDropdown.innerHTML = `
               <option value="browser-uptime">Browser Uptime</option>
               <option value="reading-time">Reading Time</option>
           `;
    } else if (reportsDropdown.value === "notifications") {
        subDropdown.innerHTML = `
               <option value="overall-success-rate">Overall Success Rate</option>
           `;
    } else if (reportsDropdown.value === "pop-up-notifications") {
        subDropdown.innerHTML = `
               <option value="widget">Pop-up (both large &amp; small)</option>
               <option value="preview-page">Preview Page</option>
           `;
    } else if (reportsDropdown.value === "subtle-notifications") {
        subDropdown.innerHTML = `
               <option value="widget">Widget</option>
               <option value="flying-widget">Flying Widget</option>
               <option value="widget-notification">Widget Notification</option>
               <option value="widget-ctr-sucess">Widget CTR Sucess</option>
           `;
    } else if (reportsDropdown.value === "post-ideas") {
        subDropdown.innerHTML = `
               <option value="post-statistics">Post Statistics</options>
               <option value="posts">Posts</options>
               <option value="viewing-history-of-viewed-posts">Viewing History Of viewed posts</options>
               <option value="categorywise-count">Categorywise Count</options>
           `;
    } else if (reportsDropdown.value === "content-editor") {
        subDropdown.innerHTML = `
               <option value="variant-report">Variant Report</options>
               <option value="regenerate-stat">Regenerate Stat(Broad summary)</options>
               <option value="variant-history">Variant History(for individual review)</options>
               <option value="compare-between-prompts">Compare between original & final prompts</options>
               <option value="heading-change">Heading Change</options>
               <option value="rephrase">Rephrase</options>
               <option value="rephrase">Rephrase</options>
           `;
    } else if (reportsDropdown.value === "linkedin-page-views") {
        subDropdown.innerHTML = `
           <option value="linkedin-active-time">Linkedin Active Time</options>
           <option value="linkedin-active-time">Linkedin Active Time</options>
           <option value="summary-report">Summary Report</options>
           <option value="summary-report">Summary Report</options>
           `;
    } else if (reportsDropdown.value === "product-usage") {
        subDropdown.innerHTML = `
           <option value="total-usage">Total Usage</options>
           <option value="time-spent-by-page">Time Spent by Page</options>
           <option value="for-gtm">For GTM</options>
           <option value="trial-period-status">Trial Period Status</options>
           <option value="user-journey">User Journey</options>
           <option value="user-base">User base</options>
           <option value="new-user-stats">New User Stats</options>
           <option value="new-user">New User</options>
           `;
    } else if (reportsDropdown.value === "other-reports") {
        subDropdown.innerHTML = `
           <option value="User Stage">User Stage</options>
           <option value="TFL">TFL</options>
           <option value="Inducted">Inducted</options>
           <option value="Activated">Activated</options>
           <option value="PQL">PQL</options>
           <option value="Cold User">Cold User</options>
           <option value="Warm User">Warm User</options>
           <option value="Paid User">Paid User</options>   
           `;
    }
    if (subDropdown.innerHTML !== "") {
        subDropdownContainer.style.display = "block";
    } else {
        subDropdownContainer.style.display = "none";
    }
}

let selectedAction = null;

function confirmAction() {
    const userId = document.getElementById("user-id").value;
    if (!userId) {
        alert("Please enter a user ID first");
    } else {
        if (selectedAction === "block") {
            if (confirm("Are you sure you want to block this user?")) {
                alert("User blocked successfully");
            }
        } else if (selectedAction === "delete") {
            if (confirm("Are you sure you want to delete this user?")) {
                alert("User deleted successfully");
            }
        }
        document.getElementById("options").classList.add("hidden");
    }
}

function showOptions(action) {
    selectedAction = action;
    const userId = document.getElementById("user-id").value;
    if (!userId) {
        alert("Please enter a user ID first");
    } else {
        const blockButton = document.getElementById("block-button");
        const deleteButton = document.getElementById("delete-button");
        if (selectedAction === "block") {
            blockButton.classList.add("selected");
            deleteButton.classList.remove("selected");
        } else if (selectedAction === "delete") {
            blockButton.classList.remove("selected");
            deleteButton.classList.add("selected");
        }
        document.getElementById("options").classList.remove("hidden");
    }
}
