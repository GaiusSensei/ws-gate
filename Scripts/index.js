head.load("bower_components/jquery/dist/jquery.min.js", //
    "bower_components/bootstrap/dist/js/bootstrap.min.js", //
    "bower_components/bootstrap/dist/css/bootstrap.min.css", //
    "bower_components/bootstrap/dist/css/bootstrap-theme.min.css", //
    "bower_components/jstorage/jstorage.min.js", //
    "bower_components/datatables/media/js/jquery.dataTables.js", //
    "bower_components/datatables/media/css/jquery.dataTables.css", //
    "Content/index.css", //

    function readyF() {
        $("#tblCardBrowser").dataTable({
            "bPaginate": false,
            "bLengthChange": false,
            "bFilter": true,
            "bSort": true,
            "bInfo": true,
            "bAutoWidth": true,
            "bScrollInfinite": true,
            "bScrollCollapse": true,
            "sScrollY": "340px",
            "aaSorting": [
                [3, "asc"]
            ],
            "aoColumnDefs": [{
                "bSortable": false,
                "aTargets": [0, 2]
            }, {
                "bVisible": false,
                "aTargets": [10]
            }],
            "fnCreatedRow": function(nRow, aData, iDataIndex) {
                if(aData[10] == "Green") {
                    $(nRow).addClass("success");
                } else if(aData[10] == "Blue") {
                    $(nRow).addClass("info");
                } else if(aData[10] == "Yellow") {
                    $(nRow).addClass("warning");
                } else if(aData[10] == "Red") {
                    $(nRow).addClass("danger");
                }
            }
        });
        loadAllCards();
    });
var changeRow = function changeRowF(row) {
    $(".row").hide();
    $("#" + row).fadeIn();
    if(row === "cardBrowser") $("#tblCardBrowser").dataTable().fnDraw();
};
var loadAllCards = function loadAllCardsF() {
    head.load("Scripts/cardsets/S20.js", //
        "Scripts/cardsets/S15.js", //
        "Scripts/cardsets/S17.js", //

        function loadDoneF() {
            $('#tblCardBrowser > tbody').empty();
            $.each(gate.cardsets, function one(k1, v1) {
                $.each(gate.cardset[v1].Cards, function two(k2, v2) {
                    $('#tblCardBrowser').dataTable().fnAddData([ //
                        "<input type='checkbox' style=\"width:25px;\"/>", //
                        v2.CardNo, //
                        "<button class=\"btn btn-xs btn-default btn-block\" style=\"width:25px;\"><span class=\"glyphicon glyphicon-eye-open\"></span></button>", //
                        v2.CardName, //
                        v2.Type, //
                        "L:" + v2.Level, //
                        "C:" + v2.Cost, //
                        v2.Power, //
                        v2.Traits[0], //
                        v2.Traits[1], //
                        v2.Color
                    ]);
                });
            });
        });
};