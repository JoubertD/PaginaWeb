  var table = $('#myTable').DataTable();
      $("#insert-more").click(function () {
         $("#myTable").each(function () {
             var tds = [];
             jQuery.each($('tr:last td', this), function () {
                 tds.push($(this).html());
             });
             for (var i = 0; i < tds.length; i++) {
             console.log(tds[i]);
             }
             table.row.add(tds).draw( true );
         });
      });

 	console.log("");