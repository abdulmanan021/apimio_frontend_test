var subs_btn = document.getElementById("subscribe"),
    subs_count = 0;
subs_btn.onclick = function () {
    subs_count += 1;
    console.log(subs_count)
    $("#subs_counttt").text(subs_count);
    subs_btn.innerHTML = "selected for tracking"
};

var down_btn = document.getElementById("download"),
    down_count = 0;
down_btn.onclick = function () {
    down_count += 1;
    console.log(down_count)
    $("#down_counttt").text(down_count);
    down_btn.innerHTML = "selected for tracking"
};

var contact_btn = document.getElementById("contact"),
    contact_count = 0;
contact_btn.onclick = function () {
    contact_count += 1;
    console.log(contact_count)
    $("#contact_counttt").text(contact_count);
    contact_btn.innerHTML = "selected for tracking"
};

var read_more_btn = document.getElementById("read_more"),
    rm_count = 0;
read_more_btn.onclick = function () {
    rm_count += 1;
    console.log(rm_count)
    $("#read_more_counttt").text(rm_count);
};

var vsite_btn = document.getElementById("visit_site"),
    vs_count = 0;
vsite_btn.onclick = function () {
    vs_count += 1;
    console.log(vs_count)
    $("#vsite_counttt").text(vs_count);
};