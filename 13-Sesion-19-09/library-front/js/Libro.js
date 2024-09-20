function loadData() {
    $.ajax({
        url: 'http://localhost:9090/v1/api/libro',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            let html = '';
            $.each(data, function (index, libro) {
                html += `<tr>
                            <td>${libro.codigo}</td>
                            <td>${libro.nombre}</td>
                            <td>
                                <button type="button" class="btn btn-primary btn-sm" onclick="findById(${libro.id})">Editar</button>
                                <button type="button" class="btn btn-danger btn-sm" onclick="deleteById(${libro.id})">Eliminar</button>
                            </td>
                        </tr>`;
            });
            $('#tableBody').html(html);  // Agregar filas a la tabla
            clearData();
        },
        error: function (error) {
            Swal.fire('Error', 'Hubo un error al cargar los datos', 'error');
            console.error('Error al cargar los datos:', error);
        }
    });
}

function findById(id) {
    $.ajax({
        url: `http://localhost:9090/v1/api/libro/${id}`,
        method: 'GET',
        dataType: 'json',
        success: function (libro) {
            $('#codigo').val(libro.codigo);
            $('#nombre').val(libro.nombre);
            $('#id').val(libro.id);

            Swal.fire('Éxito', 'Libro encontrado', 'success');

            // Cambiar el texto del botón a 'Actualizar'
            $('#save').text('Actualizar');

            // Cambiar la funcionalidad del botón de 'Guardar' a 'Actualizar'
            $('#save').off('click').on('click', function () {
                update(libro.id); // Llamar a la función update con el ID del libro
            });
        },
        error: function (error) {
            Swal.fire('Error', 'No se pudo encontrar el libro', 'error');
            console.error('Error al cargar los datos:', error);
        }
    });
}

function deleteById(id) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: `http://localhost:9090/v1/api/libro/${id}`,
                method: 'DELETE',
                success: function () {
                    loadData();
                    Swal.fire('Eliminado', 'El libro ha sido eliminado correctamente', 'success');
                    clearData();
                },
                error: function (error) {
                    Swal.fire('Error', 'No se pudo eliminar el libro', 'error');
                    console.error('Error al eliminar el libro:', error);
                }
            });
        }
    });
}

function update(id) {
    let libro = {
        codigo: $('#codigo').val(),
        nombre: $('#nombre').val(),
        id: $('#id').val()
    };

    $.ajax({
        url: 'http://localhost:9090/v1/api/libro/' + libro.id,
        method: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(libro),
        success: function () {
            loadData();
            Swal.fire('Actualizado', 'El libro ha sido actualizado correctamente', 'success');

            // Cambiar el texto del botón a 'Guardar'
            $('#save').text('Guardar');

            // Cambiar la funcionalidad del botón de 'Actualizar' a 'Guardar'
            $('#save').off('click').on('click', function () {
                save(libro.id); // Llamar a la función update con el ID del libro
            });
        },
        error: function (error) {
            Swal.fire('Error', 'No se pudo actualizar el libro', 'error');
            console.error('Error al actualizar el libro:', error);
        }
    });
}

function save() {
    let libro = {
        codigo: $('#codigo').val(),
        nombre: $('#nombre').val()
    };

    $.ajax({
        url: 'http://localhost:9090/v1/api/libro',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(libro),
        success: function () {
            loadData();
            Swal.fire('Guardado', 'El libro ha sido guardado correctamente', 'success');
        },
        error: function (error) {
            Swal.fire('Error', 'No se pudo guardar el libro', 'error');
            console.error('Error al guardar el libro:', error);
        }
    });
}

function clearData() {
    $('#codigo').val('');
    $('#nombre').val('');
    $('#id').val('');
}
