document.addEventListener("DOMContentLoaded", function () {
    var reasonContactSelect = document.getElementById("reasonContact");
    var otherComments = document.getElementById("other");
    var otherLabel = document.getElementById("other-label");
    var jobOfferLabel = document.getElementById("job-label");
    var jobOfferInfo = document.getElementById("jobOffer");
    var adviceLabel = document.getElementById("advice-label");
    var adviceInfo = document.getElementById("adviceInfo");

    reasonContactSelect.addEventListener("change", function () {
        if (reasonContactSelect.value === "other") {
            otherComments.style.display = "block";
            otherLabel.style.display = "block";
            jobOfferLabel.style.display = "none";
            jobOfferInfo.style.display = "none";
            adviceInfo.style.display = "none";
            adviceLabel.style.display = "none";
        } else if (reasonContactSelect.value === "jobOffer") {
            jobOfferLabel.style.display = "block";
            jobOfferInfo.style.display = "block";
            otherLabel.style.display = "none";
            otherComments.style.display = "none";
            adviceInfo.style.display = "none";
            adviceLabel.style.display = "none";
        } else if (reasonContactSelect.value === "advice") {
            adviceInfo.style.display = "block";
            adviceLabel.style.display = "block";
            otherLabel.style.display = "none";
            otherComments.style.display = "none";
            jobOfferLabel.style.display = "none";
            jobOfferInfo.style.display = "none";
        } else {
            otherLabel.style.display = "none";
            otherComments.style.display = "none";
            jobOfferLabel.style.display = "none";
            jobOfferInfo.style.display = "none";
            adviceInfo.style.display = "none";
            adviceLabel.style.display = "none";
        }
    });

    if (reasonContactSelect.value !== "other" && reasonContactSelect.value !== "jobOffer" && reasonContactSelect.value !== "advice") {
        otherLabel.style.display = "none";
        otherComments.style.display = "none";
        jobOfferLabel.style.display = "none";
        jobOfferInfo.style.display = "none";
        adviceInfo.style.display = "none";
        adviceLabel.style.display = "none";
    }
});
