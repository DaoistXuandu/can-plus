import { title } from "process";
import Swal from "sweetalert2";
import { measureMemory } from "vm";

function error_alert(message: string) {
    return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
    });
}

function ok_alert(title: string, message: string) {
    return Swal.fire({
        title: title,
        text: message,
        icon: "success"
    });
}

function confirm_alert(title: string, message: string) {
    return Swal.fire({
        title: title,
        text: message,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ubah!!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Perubahan",
                text: `berhasil ${title.toLowerCase()}`,
                icon: "success"
            });
            return true
        }
        else return false
    });
}

export { error_alert, ok_alert, confirm_alert }