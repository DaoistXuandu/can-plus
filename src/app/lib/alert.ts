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

export { error_alert, ok_alert }