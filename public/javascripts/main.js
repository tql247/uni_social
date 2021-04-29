function openUpdateModal() {
    document.getElementById("update_info_modal").style.opacity = "0.95";
    document.getElementById("update_info_modal").style.zIndex = "100";
}

function closeUpdateModal(event) {
    document.getElementById("update_info_modal").style.opacity = "0";
    document.getElementById("update_info_modal").style.zIndex = "-100";
}

function openAddFeedModal() {
    document.querySelector("#add_feed_modal .overlay").style.opacity = "0.7";
    document.querySelector("#add_feed_modal .content").style.zIndex = "101";
    document.getElementById("add_feed_modal").style.zIndex = "100";
}

function closeAddFeedModal(event) {
    document.querySelector("#add_feed_modal .overlay").style.opacity = "1";
    document.querySelector("#add_feed_modal .content").style.zIndex = "-11";
    document.getElementById("add_feed_modal").style.zIndex = "-100";
}

function clickElement(id) {
    document.getElementById(id).click();
}


function activeLoading() {
    document.getElementById("loading").classList.add("active");
}

function inactiveLoading() {
    document.getElementById("loading").classList.remove("active");
}

function addNewFeed(data) {
    $(data).prependTo("#feed_list");
}

$(document).ready(function () {
    $("#add-feed-form").on("submit", function (e) {
        activeLoading();

        document.getElementById("feed-input-text-hidden").value = document.getElementById("feed-input-text").textContent
        const dataString = $(this).serialize();
        const response = $.ajax({
            type: "POST",
            url: "/feed/post",
            data: dataString,
            async: true,
            success: (res) => {
                // clear query string
                const uri = window.location.toString();
                if (uri.indexOf("?") > 0) {
                    const clean_uri = uri.substring(0, uri.indexOf("?"));
                    window.history.replaceState({}, document.title, clean_uri);
                }
                if (res.status !== 200) location.reload()
                addNewFeed(res.data)
                closeAddFeedModal();
                inactiveLoading();
            }
        });

        e.preventDefault();
        return false;
    });
})
