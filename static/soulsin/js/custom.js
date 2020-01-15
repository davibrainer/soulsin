$('.custom-file-input').on('change',function(){
    var fileName = $(this).val().replace("C:\\fakepath\\", "");
    $(this).next('.custom-file-label').html(fileName);
});

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

$('#sidebar').slimScroll({
    height: '100%',
    size: '5px',
    color: '#BFC4CA',
});

$('.dataTables').DataTable({
    "language": {
        "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
    }
});

$('.dataTable-1-asc').DataTable({
    'order': [[1, 'asc']],
    'language': {
        'url': '//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json'
    }
});

$('.select2').select2({
    language: "pt-BR"
});

$('.tip').tooltip();