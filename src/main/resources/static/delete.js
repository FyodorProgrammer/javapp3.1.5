async function deleteUserData(id) {

    let href = `/api/users/${id}`
        $.get(href, function (user) {
            $('.myDeleteForm #dId').val(user.id);
            $('.myDeleteForm #dUsername').val(user.username);
            $('.myDeleteForm #dLastName').val(user.lastName);
            $('.myDeleteForm #dAge').val(user.age);
            $('.myDeleteForm #dEmail').val(user.email);
            const inputRoles = document.getElementById('dRoles');


            inputRoles.innerHTML = `
        <option value="${dbRoles[0].id}" name="ROLE_ADMIN" >${dbRoles[0].name}</option>
        <option value="${dbRoles[1].id}" name="ROLE_USER" >${dbRoles[1].name}</option>
        `
        })

    

    document.getElementById('delete-user-button').addEventListener('click', async () =>{
            const res = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        };

        await fetch(href, res).then(() => {
            $('#delete-close-modal').click();
            getAllUser();
        });



        $('#deleteModal').modal('toggle');

    })
   
}