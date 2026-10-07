(function ($) {
  "use strict";

  // =====================================================================
  //  LAYOUT PLAN DATA  (name / survey no / village read off each scanned
  //  plan image in assets/img/plans/). Some old scans are faded - where a
  //  detail could not be read reliably it is left as "-"; edit any entry
  //  directly below (and re-check against the plan image) whenever you
  //  have the correct name / survey number on hand.
  //  - village  : "1" Vellanur Village, "2" Morai Village, "0" other/unclear
  // =====================================================================
  var LAYOUTS = [
    { village:"2", name:"Vivekananda Nagar", surveyNo:"771/1 to 5, 758/3 to 10", info:"Plan of Layout of House Sites, V.No.39 Morai, Saidapet Taluk", image:"assets/img/plans/vivekananda-nagar.jpg" },
    { village:"2", name:"Sri Ganesha Nagar", surveyNo:"342/1B & 3B", info:"House sites at Morai Village, Saidapet Taluk, MGR District", image:"assets/img/plans/sri-ganesha-nagar.jpg" },
    { village:"2", name:"Avan Nagar Extension", surveyNo:"54", info:"House sites, Morai Village, Saidapet Taluk, Chingleput", image:"assets/img/plans/avan-nagar-extension.jpg" },
    { village:"2", name:"Sri Vari Nagar", surveyNo:"-", info:"Morai Village, Ambattur Taluk, Thiruvallur Dist.", image:"assets/img/plans/layout-01.jpg" },
    { village:"0", name:"Gandhi Nagar", surveyNo:"187/2,3,4Pt,5Pt,188/5Pt,7Pt,8A Pt & 8B Pt", info:"Veerapuram Village, Villivakkam Taluk, Thiruvallur Dist.", image:"assets/img/plans/layout-02.jpg" },
    { village:"2", name:"Venugopal Nagar", surveyNo:"-", info:"House site layout plan.", image:"assets/img/plans/layout-03.jpg" },
    { village:"0", name:"Layout Plan 04", surveyNo:"-", info:"Tap View Plan to see the full layout image.", image:"assets/img/plans/layout-04.jpg" },
    { village:"2", name:"Sri Lakshmi Amman Nagar", surveyNo:"52/78,12,10 & 93/1 to 20", info:"Morai Village, Ambattur Taluk, Thiruvallur Dist.", image:"assets/img/plans/layout-05.jpg" },
    { village:"2", name:"Sri Lakshmi Amman Nagar (Extension)", surveyNo:"-", info:"Morai Village - additional sheet of the same layout.", image:"assets/img/plans/layout-06.jpg" },
    { village:"2", name:"Subhash Nagar", surveyNo:"404/4&5, 407, 409, 410, 411", info:"Morai Village, Saidapet Taluk, Chengalpattu MGR Dist.", image:"assets/img/plans/layout-07.jpg" },
    { village:"0", name:"Karpagam Nagar", surveyNo:"-", info:"Puliyuthi Village, Chengai MGR Dist.", image:"assets/img/plans/layout-08.jpg" },
    { village:"2", name:"Sri Venkateswara Nagar", surveyNo:"-", info:"House site layout plan.", image:"assets/img/plans/layout-09.jpg" },
    { village:"2", name:"Devi Nagar (Morai)", surveyNo:"2173/4", info:"Morai Village, Villivakkam Panchayat Union, Saidapet Taluk.", image:"assets/img/plans/layout-10.jpg" },
    { village:"2", name:"Layout Plan 11", surveyNo:"52/4", info:"Village No.39, Morai Village, Chengalpattu MGR Dist.", image:"assets/img/plans/layout-11.jpg" },
    { village:"2", name:"Sree Ganapathy Nagar", surveyNo:"-", info:"House site layout plan.", image:"assets/img/plans/layout-12.jpg" },
    { village:"0", name:"Sri Chandrasekar Nagar", surveyNo:"-", info:"Chengalpattu District.", image:"assets/img/plans/layout-13.jpg" },
    { village:"2", name:"Sri Swamy Vivekananda Nagar", surveyNo:"295/2, 298/1, 299/1", info:"V.No.39 Morai, Ambattur Taluk, Thiruvallur Dist.", image:"assets/img/plans/layout-14.jpg" },
    { village:"0", name:"Layout Plan 15", surveyNo:"-", info:"Tap View Plan to see the full layout image.", image:"assets/img/plans/layout-15.jpg" },
    { village:"2", name:"Kamachi Nagar", surveyNo:"1097-1107", info:"Morai Village, Ambattur Taluk, Thiruvallur Dist.", image:"assets/img/plans/layout-16.jpg" },
    { village:"2", name:"Plots near Redhills High Road", surveyNo:"-", info:"Morai Village, Ambattur Taluk, Thiruvallur Dist.", image:"assets/img/plans/layout-17.jpg" },
    { village:"0", name:"CMA Master Plan 2026 (Reference Map)", surveyNo:"-", info:"Zoning reference map - not an individual sale layout.", image:"assets/img/plans/layout-18.jpg" },
    { village:"2", name:"Sarathi Nagar", surveyNo:"286/82", info:"Radhakrishnan Avenue, Morai Village, Ambattur Taluk.", image:"assets/img/plans/layout-19.jpg" },
    { village:"0", name:"Sri Chandrasekar Nagar (Avadi)", surveyNo:"-", info:"Avadi Town & Saidapet Taluk, Chengalpattu Dist.", image:"assets/img/plans/layout-20.jpg" },
    { village:"2", name:"Sri Kamakshi Nagar", surveyNo:"475/11&12, 476/2,4&5", info:"Morai, near Avadi Tank Factory, Madras-Veerapuram Bus Route.", image:"assets/img/plans/layout-21.jpg" },
    { village:"2", name:"Layout Plan 22", surveyNo:"345/4", info:"Morai Village, Saidapet Taluk, Chengai-MGR Dist.", image:"assets/img/plans/layout-22.jpg" },
    { village:"2", name:"Layout Plan 23", surveyNo:"354/4", info:"V.No.39 Morai, Chengalpattu MGR Dist.", image:"assets/img/plans/layout-23.jpg" },
    { village:"2", name:"Vishnu Priya Nagar", surveyNo:"-", info:"Morai Village, Saidapet Taluk.", image:"assets/img/plans/layout-24.jpg" },
    { village:"2", name:"Sarathy Nagar", surveyNo:"-", info:"House site layout plan.", image:"assets/img/plans/layout-25.jpg" },
    { village:"2", name:"Lucky Nagar", surveyNo:"65", info:"V.No.39 Morai Village, Ambattur Taluk, Thiruvallur Dist.", image:"assets/img/plans/layout-26.jpg" },
    { village:"0", name:"CMA Master Plan 2026 - Pulikutti Village (Reference Map)", surveyNo:"-", info:"Zoning reference map - not an individual sale layout.", image:"assets/img/plans/layout-27.jpg" },
    { village:"2", name:"Sri Dharma Sastha Nagar", surveyNo:"279/1", info:"V.No.39 Morai Village, Veerapuram, Saidapet Taluk, Chengalpattu Dist.", image:"assets/img/plans/layout-28.jpg" },
    { village:"0", name:"Andal Nagar", surveyNo:"-", info:"Veerapuram, Thiruvallur Dist.", image:"assets/img/plans/layout-29.jpg" },
    { village:"2", name:"Subhash Nagar (Alamathi Road)", surveyNo:"404/4a,4b,2a,2b,3a,3b & 409/2a,2b,3a,3b,4a,4b", info:"Morai Village, Saidapet Taluk, Chengalpattu MGR Dist.", image:"assets/img/plans/layout-30.jpg" },
    { village:"2", name:"V.I.P. Nagar", surveyNo:"410/7B", info:"V.No.5 Morai Village, Ambattur Taluk, Thiruvallur Dist.", image:"assets/img/plans/layout-31.jpg" },
    { village:"2", name:"Sri Lakshmi Nagar (Avadi)", surveyNo:"-", info:"Morai Village, Saidapet Taluk.", image:"assets/img/plans/layout-32.jpg" },
    { village:"2", name:"Manju Nagar", surveyNo:"14/16,17", info:"Morai Village, near TSP Camp.", image:"assets/img/plans/layout-33.jpg" },
    { village:"2", name:"Sri Sai Nagar", surveyNo:"89, 3A, 3B, 3C", info:"Morai Village, Saidapet Taluk, Villivakkam Panchayat.", image:"assets/img/plans/layout-34.jpg" },
    { village:"2", name:"Layout Sketch", surveyNo:"39", info:"Morai Village, Saidapet Taluk.", image:"assets/img/plans/layout-35.jpg" },
    { village:"2", name:"Annai Illam Nagar", surveyNo:"-", info:"Saidapet Taluk.", image:"assets/img/plans/layout-36.jpg" },
    { village:"0", name:"Ambarayapuram Village Layout", surveyNo:"-", info:"Ambarayapuram Village.", image:"assets/img/plans/layout-37.jpg" },
    { village:"0", name:"Ayyappan Nagar", surveyNo:"21/2, 209/1", info:"Vijayamma Nagar Village, Saidapet Taluk, Chengai-MGR Dist.", image:"assets/img/plans/layout-38.jpg" },
    { village:"2", name:"Sree Ganapathy Nagar Extension", surveyNo:"-", info:"Morai Village, near M.T.H Road.", image:"assets/img/plans/layout-39.jpg" },
    { village:"2", name:"Sri Velmurugan Nagar", surveyNo:"484, 485/P", info:"Morai, near Avadi Tank Factory, Madras-Veerapuram Bus Route.", image:"assets/img/plans/layout-40.jpg" },
    { village:"2", name:"Solai Nagar", surveyNo:"-", info:"Morai Village.", image:"assets/img/plans/layout-41.jpg" },
    { village:"2", name:"Sri Ganesh Ram Nagar", surveyNo:"-", info:"Morai Village & Taluk, Ambattur, Thiruvallur Dist.", image:"assets/img/plans/layout-42.jpg" },
    { village:"2", name:"Anjavar Nagar", surveyNo:"-", info:"House site layout plan.", image:"assets/img/plans/layout-43.jpg" },
    { village:"2", name:"Sri Lakshmi Nagar", surveyNo:"105/1B, 104, 104/10A, 104/1", info:"Morai Village, Saidapet Taluk, Chengleput Dist.", image:"assets/img/plans/layout-44.jpg" },
    { village:"2", name:"Sankar Avenue", surveyNo:"67/3A,B,7,2 & 63/9B", info:"V.No.39 Morai Village, Saidapet, Chengai MGR Dist.", image:"assets/img/plans/layout-45.jpg" },
    { village:"2", name:"Sri Ram Nagar", surveyNo:"-", info:"Morai Village, Saidapet Taluk, Chengalpattu Dist.", image:"assets/img/plans/layout-46.jpg" },
    { village:"2", name:"Soundarya Nagar", surveyNo:"221, 665, 60, 471", info:"V.No.39 Morai, Saidapet, Villivakkam Panchayat Union.", image:"assets/img/plans/layout-47.jpg" },
    { village:"0", name:"Layout Plan 48", surveyNo:"-", info:"Tap View Plan to see the full layout image.", image:"assets/img/plans/layout-48.jpg" },
    { village:"2", name:"Arul Nagar", surveyNo:"450/2, 1990/1, 4991/2,4,3", info:"Village No.9 Morai, Veerapuram, Ambattur Taluk, Thiruvallur Dist.", image:"assets/img/plans/layout-49.jpg" },
    { village:"2", name:"Arul Mathu Kumarari Matha Nagar (Area Overview)", surveyNo:"4 & 7/1", info:"Morai Village, Ambattur Taluk, Thiruvallur Dist.", image:"assets/img/plans/layout-50.jpg" },
    { village:"2", name:"Ganesh Nagar", surveyNo:"469/1,4,6 & 7", info:"Morai Village, Saidapet Taluk, Chingleput Dist.", image:"assets/img/plans/layout-51.jpg" },
    { village:"2", name:"Sri Ragavendra Nagar", surveyNo:"92/3", info:"Morai Village, Saidapet Taluk, Chingleput Dist.", image:"assets/img/plans/layout-52.jpg" },
    { village:"2", name:"Layout Plan 53", surveyNo:"-", info:"Near Morai Village.", image:"assets/img/plans/layout-53.jpg" },
    { village:"2", name:"Muthu Raja Nagar Annex", surveyNo:"92/2C, 4 & 2", info:"V.No.39 Morai Village, Saidapet Taluk, Chengalpattu MGR Dist.", image:"assets/img/plans/layout-54.jpg" },
    { village:"2", name:"Muthu Raja Nagar Annex (Section 2)", surveyNo:"92/6A", info:"V.No.39 Morai Village, Saidapet Taluk, Chengalpattu MGR Dist.", image:"assets/img/plans/layout-55.jpg" },
    { village:"2", name:"Manju Nagar", surveyNo:"103/2,9,10 & 104/7,8,9", info:"V.No.5 Morai Village, Saidapet Taluk, Chengai MGR Dist.", image:"assets/img/plans/layout-56.jpg" },
    { village:"2", name:"Ettiamman Nagar", surveyNo:"-", info:"Morai Village, E.Saidapet Subdivision.", image:"assets/img/plans/layout-57.jpg" },
    { village:"2", name:"Sathya Nagar", surveyNo:"410/1,6 & 472/3b,9", info:"Morai Village, Saidapet Taluk, Chengai-Anna Dist.", image:"assets/img/plans/layout-58.jpg" },
    { village:"2", name:"Sree Balaji Nagar Extension", surveyNo:"80/9N, 9H", info:"Village No.5 Morai, Veerapuram, Ambattur Taluk, Thiruvallur Dist.", image:"assets/img/plans/layout-59.jpg" },
    { village:"2", name:"Sri Velmurugan Nagar (Extension)", surveyNo:"480, 486, 184, 57, 58", info:"Morai Village.", image:"assets/img/plans/layout-60.jpg" },
    { village:"2", name:"Sri Lakshmi Amman Nagar (Annex)", surveyNo:"54/1A1", info:"No.5 Morai, Madura Pulikuthi Village, Ambattur Taluk, Thiruvallur Dist.", image:"assets/img/plans/layout-61.jpg" },
    { village:"2", name:"Madhavan Nagar Extension", surveyNo:"9/138", info:"Pulikuthi Village, Morai, Saidapet Taluk, Chingleput Dist.", image:"assets/img/plans/layout-62.jpg" },
    { village:"2", name:"Annai Karumari Nagar", surveyNo:"59 (Part)", info:"Pulikuthi Village (Morai), Saidapet Taluk, Chengleput Dist.", image:"assets/img/plans/layout-63.jpg" },
    { village:"2", name:"Sri Balaji Nagar Extension", surveyNo:"34/123", info:"Morai Village, Ambattur Taluk, Thiruvallur Dist.", image:"assets/img/plans/layout-64.jpg" },
    { village:"2", name:"Arunachalam Nagar", surveyNo:"-", info:"Villivakkam Panchayat Union, near Avadi.", image:"assets/img/plans/layout-65.jpg" },
    { village:"2", name:"Baba Nagar", surveyNo:"59", info:"Pulikuthi, Veerapuram, Saidapet Taluk.", image:"assets/img/plans/layout-66.jpg" },
    { village:"2", name:"Madhavan Nagar", surveyNo:"9, 9/2A, 9/2B", info:"Morai Village, Saidapet Taluk, Chingleput Dist.", image:"assets/img/plans/layout-67.jpg" },
    { village:"2", name:"Haris Nagar", surveyNo:"-", info:"Near Avadi, HVF/CRPF Housing Quarters.", image:"assets/img/plans/layout-68.jpg" },
    { village:"0", name:"Layout Plan 69", surveyNo:"-", info:"Tap View Plan to see the full layout image.", image:"assets/img/plans/layout-69.jpg" },
    { village:"2", name:"Madhavan Nagar Extension", surveyNo:"8410/3, 2/1", info:"Pulikuthi Village, Morai, Saidapet Taluk, Chingleput Dist.", image:"assets/img/plans/layout-70.jpg" },
    { village:"2", name:"Subramaniya Nagar Extension I", surveyNo:"519/1 & 11", info:"Morai Village, Chengalpet Taluk, Chengalpet Dist.", image:"assets/img/plans/layout-71.jpg" },
    { village:"0", name:"Layout Plan 72", surveyNo:"-", info:"Tap View Plan to see the full layout image.", image:"assets/img/plans/layout-72.jpg" },
    { village:"2", name:"Murugan Nagar", surveyNo:"517/5,6,7,8,2 & 9", info:"W.43 Morai, Saidapet Taluk, Chingleput Dist.", image:"assets/img/plans/layout-73.jpg" },
    { village:"2", name:"Subramaniyam Avenue", surveyNo:"620", info:"No.39 Morai Village, Saidapet Taluk, Chengai MGR Dist, Villivakkam Panchayat Union.", image:"assets/img/plans/layout-74.jpg" },
    { village:"2", name:"Thiru Mookambikai Nagar", surveyNo:"52 & 3rd Part", info:"Pulikuthi Village, Morai, Ambattur Taluk, Thiruvallur Dist.", image:"assets/img/plans/layout-75.jpg" },
    { village:"2", name:"Shree Ganesh Nagar", surveyNo:"59 (Part)", info:"Pulikuthi Village, Saidapet Taluk (Morai), Chingleput Dist.", image:"assets/img/plans/layout-76.jpg" },
    { village:"2", name:"Layout Plan 77", surveyNo:"517/4", info:"V.No.39 Morai, near Avadi, Saidapet Taluk.", image:"assets/img/plans/layout-77.jpg" },
    { village:"2", name:"Thaai Moogambikai Nagar", surveyNo:"-", info:"Morai Village.", image:"assets/img/plans/layout-78.jpg" },
    { village:"2", name:"Thaai Moogambikai Nagar (Sheet 2)", surveyNo:"-", info:"Morai Village - additional sheet of the same layout.", image:"assets/img/plans/layout-79.jpg" },
    { village:"2", name:"Raja Rajeshwari Nagar", surveyNo:"59/3", info:"Pulikuthi Village, Avadi Taluk, Thiruvallur Dist. (Near Veerapuram 400 Ft Road & Vel Multi Tech Eng. College)", image:"assets/img/plans/layout-80.jpg" },
    { village:"2", name:"Sri Sai Nagar (Sheet 2)", surveyNo:"89, 3A, 3B, 3C", info:"Morai Village, Saidapet Taluk, Villivakkam Panchayat.", image:"assets/img/plans/layout-81.jpg" },
    { village:"2", name:"Sri Lakshmi Amman Nagar", surveyNo:"53/13,14,15", info:"V.No.39 Morai Pulikuthi Village, Ambattur Taluk, Thiruvallur Dist.", image:"assets/img/plans/layout-82.jpg" },
    { village:"2", name:"Vijayashanthi Nagar", surveyNo:"341A (Patta No.188)", info:"V.No.5 Morai Pulikuthi Village, Ambattur Taluk, Thiruvallur Dist.", image:"assets/img/plans/layout-83.jpg" },
    { village:"2", name:"Poorni Nagar", surveyNo:"-", info:"Morai Village, Villivakkam, Saidapet Taluk.", image:"assets/img/plans/layout-84.jpg" },
    { village:"2", name:"Sri Sakthi Nagar", surveyNo:"26/18,9 & 29/7,8,8", info:"Morai Village, Villivakkam, Saidapet Taluk, Chengalpattu Dist.", image:"assets/img/plans/layout-85.jpg" }
  ];
  var VILLAGE_NAME = { "0": "", "1": "Vellanur Village", "2": "Morai Village" };
  var WA = "919444292247";          // used by the contact page / header search
  var WA_ENQUIRE = "918122883543";  // used by the View Plan popup's Enquire button

  // =====================================================================
  //  PLANS PAGE
  // =====================================================================
  if ($("#planList").length) {

    var params = new URLSearchParams(window.location.search);
    var state = { village: params.get("l_village") || "0", q: params.get("q") || "", letter: "" };
    $("#l_village").val(state.village);
    $("#search_q").val(state.q);

    // Build A-Z bar, disabling letters that have no layout
    var available = {};
    LAYOUTS.forEach(function (l) { available[l.name.trim().charAt(0).toUpperCase()] = true; });
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    $("#alpha").html(letters.map(function (l) {
      var dis = available[l] ? "" : "alp_disabled";
      return '<li id="alp_' + l + '" class="' + dis + '"><a href="javascript:void(0)" data-l="' + l + '" title="' + l + '">' + l + '</a></li>';
    }).join(""));

    function cardHtml(l, idx) {
      var vname = VILLAGE_NAME[l.village] || "";
      return (
        '<div class="col-lg-3 col-md-4 col-sm-6 d-flex">' +
          '<div class="property-item plan-card rounded overflow-hidden w-100 d-flex flex-column" data-idx="' + idx + '">' +
            '<div class="position-relative plan-thumb-wrap">' +
              (vname ? '<span class="plan-village-badge">' + vname + '</span>' : '') +
              '<img src="' + l.image + '" alt="' + l.name + ' layout plan" loading="lazy">' +
            '</div>' +
            '<div class="p-3 plan-body">' +
              '<h6 class="mb-1 plan-title">' + l.name + '</h6>' +
              '<p class="mb-1 text-muted plan-survey"><i class="fa fa-map-marker-alt text-primary me-1"></i>Survey No: ' + l.surveyNo + '</p>' +
              '<p class="mb-2 plan-info">' + l.info + '</p>' +
              '<button type="button" class="btn btn-outline-primary btn-sm w-100 mt-auto js-view-plan">View Plan</button>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }

    function render() {
      var q = state.q.toLowerCase().trim();
      var list = [];
      LAYOUTS.forEach(function (l, idx) {
        var match = (state.village === "0" || l.village === state.village) &&
                    (!q || (l.name + " " + l.info + " " + l.surveyNo + " " + VILLAGE_NAME[l.village]).toLowerCase().indexOf(q) > -1) &&
                    (!state.letter || l.name.trim().toUpperCase().charAt(0) === state.letter);
        if (match) list.push({ l: l, idx: idx });
      });

      $("#resultCount").text(list.length ? ("Showing " + list.length + " layout plan" + (list.length > 1 ? "s" : "")) : "");

      if (!list.length) {
        $("#planList").empty();
        $("#noResult").show();
        return;
      }
      $("#noResult").hide();
      $("#planList").html(list.map(function (o) { return cardHtml(o.l, o.idx); }).join(""));
    }

    // A-Z click
    $("#alpha").on("click", "a", function () {
      if ($(this).parent().hasClass("alp_disabled")) return;
      var l = $(this).data("l");
      state.letter = (state.letter === l) ? "" : l;
      $("#alpha li").removeClass("active");
      if (state.letter) $("#alp_" + l).addClass("active");
      state.q = ""; $("#search_q").val("");
      render();
    });

    // Search button / village dropdown
    $("#searchBtn").on("click", function () {
      state.village = $("#l_village").val();
      state.q = $("#search_q").val();
      state.letter = "";
      $("#alpha li").removeClass("active");
      render();
    });
    $("#search_q").on("keydown", function (e) { if (e.key === "Enter") $("#searchBtn").click(); });
    $("#l_village").on("change", function () { $("#searchBtn").click(); });

    // ---- View-plan modal: open + zoom/pan + share ----
    var scale = 1, MIN = 1, MAX = 4, STEP = 0.5;
    var dragging = false, startX = 0, startY = 0, startScrollL = 0, startScrollT = 0;
    var $stage = $("#vpStage"), $img = $("#viewPlanImg");
    var currentLayout = null;

    function applyZoom() {
      $img.css("transform", "scale(" + scale + ")");
      $("#vpZoomReset").text(Math.round(scale * 100) / 100 + "x");
    }
    function resetZoom() { scale = 1; applyZoom(); $stage.scrollLeft(0).scrollTop(0); }

    $("#vpZoomIn").on("click", function () { scale = Math.min(MAX, scale + STEP); applyZoom(); });
    $("#vpZoomOut").on("click", function () { scale = Math.max(MIN, scale - STEP); applyZoom(); });
    $("#vpZoomReset").on("click", resetZoom);

    $stage.on("wheel", function (e) {
      e.preventDefault();
      scale = e.originalEvent.deltaY < 0 ? Math.min(MAX, scale + 0.25) : Math.max(MIN, scale - 0.25);
      applyZoom();
    });

    $stage.on("mousedown", function (e) {
      if (scale <= 1) return;
      dragging = true; $stage.addClass("grabbing");
      startX = e.pageX; startY = e.pageY;
      startScrollL = $stage.scrollLeft(); startScrollT = $stage.scrollTop();
    });
    $(document).on("mousemove", function (e) {
      if (!dragging) return;
      $stage.scrollLeft(startScrollL - (e.pageX - startX));
      $stage.scrollTop(startScrollT - (e.pageY - startY));
    });
    $(document).on("mouseup", function () { dragging = false; $stage.removeClass("grabbing"); });

    $("#viewplan").on("hidden.bs.modal", resetZoom);

    $("#planList").on("click", ".js-view-plan, .plan-thumb-wrap img", function () {
      var idx = $(this).closest(".plan-card").data("idx");
      var l = LAYOUTS[idx];
      if (!l) return;
      currentLayout = l;
      var vname = VILLAGE_NAME[l.village] || "";
      $("#viewPlanTitle").text(l.name + (vname ? " - " + vname : ""));
      $("#viewPlanImg").attr("src", l.image);
      $("#viewPlanInfo").text("Survey No: " + l.surveyNo);
      var msg = encodeURIComponent("Hi, I am interested in " + (vname ? vname + " - " : "") + l.name + (l.surveyNo !== "-" ? " (Survey No: " + l.surveyNo + ")" : ""));
      $("#viewPlanEnquire").attr("href", "https://wa.me/" + WA_ENQUIRE + "?text=" + msg);
      resetZoom();
      var modal = new bootstrap.Modal(document.getElementById("viewplan"));
      modal.show();
    });

    $("#viewPlanShare").on("click", function () {
      if (!currentLayout) return;
      var l = currentLayout;
      var vname = VILLAGE_NAME[l.village] || "";
      var imgUrl = new URL(l.image, window.location.href).href;
      var text = "VBC Real Estate - Layout Plan\n" +
                 l.name + (vname ? " (" + vname + ")" : "") + "\n" +
                 (l.surveyNo !== "-" ? "Survey No: " + l.surveyNo + "\n" : "") +
                 "Plan image: " + imgUrl + "\n" +
                 "Enquiries: +91 94442 92247 / +91 81228 83543";

      if (navigator.share) {
        navigator.share({ title: "VBC Real Estate - " + l.name, text: text, url: imgUrl }).catch(function () {});
      } else {
        window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank");
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(function () {
            toastr.success("Layout details copied, and WhatsApp share opened.");
          });
        }
      }
    });

    render();
  }

  // =====================================================================
  //  CONTACT PAGE (unchanged behaviour: sends enquiry via WhatsApp)
  // =====================================================================
  if ($("#contactForm").length) {
    $("#iam_select").on("change", function () {
      var v = this.value, h = "";
      if (v === "1") h = '<div class="form-floating"><input type="text" class="form-control" id="c_village" placeholder="Village Name"><label for="c_village">Village Name</label></div>';
      if (v === "2") h = '<div class="row g-3">' +
        ['c_village|Village Name', 'c_layout|Layout Name', 'c_s_no|Survey No', 'c_plot|Plot No'].map(function (s) {
          var p = s.split("|");
          return '<div class="col-md-6"><div class="form-floating"><input type="text" class="form-control" id="' + p[0] + '" placeholder="' + p[1] + '"><label for="' + p[0] + '">' + p[1] + '</label></div></div>';
        }).join("") + '</div>';
      $("#iam_Div").html(h).toggle(!!h);
    });
    $("#contactForm").on("submit", function (e) {
      e.preventDefault();
      var sel = $("#iam_select").val();
      if (sel === "0") { toastr.warning("Please select what you are looking for!"); return; }
      if (!$("#c_name").val().trim() || !$("#c_no").val().trim() || !$("#c_msg").val().trim()) { toastr.warning("Please fill Name, Contact No and Message."); return; }
      var lines = ["*New enquiry - VBC Real Estate*",
        "Name: " + $("#c_name").val(), "Email: " + ($("#c_mail").val() || "-"), "Contact: " + $("#c_no").val(),
        "Looking for: " + (sel === "1" ? "Buy a Plot" : "Sell a Plot")];
      [["c_village", "Village"], ["c_layout", "Layout"], ["c_s_no", "Survey No"], ["c_plot", "Plot No"]].forEach(function (f) {
        var el = $("#" + f[0]); if (el.length && el.val()) lines.push(f[1] + ": " + el.val());
      });
      lines.push("Message: " + $("#c_msg").val());
      window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(lines.join("\n")), "_blank");
      toastr.success("Opening WhatsApp to send your message...");
    });
  }

  // Header search on non-plans pages -> redirect to plans.html
  if (!$("#planList").length) {
    $("#searchBtn").on("click", function () {
      var v = $("#l_village").val(), q = encodeURIComponent($("#search_q").val());
      window.location.href = "plans.html?l_village=" + v + "&q=" + q + "#pdiv";
    });
    $("#search_q").on("keydown", function (e) { if (e.key === "Enter") $("#searchBtn").click(); });
  }

})(jQuery);