$(document).ready(function() {
    var table = $('#sec_filing_table').DataTable({
        searching: true, // Enable searching to allow column search
        pageLength: 3,
        columnDefs: [
            { orderable: false, targets: [3, 4] } // Disable sorting on columns 3, 4, 5, and 6 (zero-based index)
        ],
        responsive: true,
        scrollX: true,
        dom: 'lrtip' // This removes the default search input from the DOM
    });

    // Populate the name filter dropdown with the unique values from the first column
    var nameFilter = $('#nameFilter');
    var yearFilter = $('#yearFilter');
    var years = new Set();
    table.rows().every(function() {
        var data = this.data();
        var name = data[3]; // Get the name from the first column
        var date = new Date(data[0]);
        var year = date.getFullYear(); // Extract year from the second column

        if ($("#nameFilter option[value='" + name + "']").length == 0) {
            nameFilter.append('<option value="' + name + '">' + name + '</option>');
        }

        if (!years.has(year)) {
            years.add(year);
            yearFilter.append('<option value="' + year + '">' + year + '</option>');
        }
    });

    // Filter button click event
    $('#filterButton').click(function() {
        var selectedName = $('#nameFilter').val();
        var selectedYear = $('#yearFilter').val();

        // Clear previous search and apply the new filter
        table.search('').columns().search('');
        table.column(3).search(selectedName).column(0).search(selectedYear).draw();
    });
});