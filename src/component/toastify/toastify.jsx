import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

    export function Error( string) {
        console.log('hellow')
        toast.error(string, {
        position: "bottom-right"});
    }

    export function Warning( string) {
        console.log('hellow')
        toast.warning(string, {
        position: "bottom-right"});
    }

    export function Success( string) {
        console.log('hellow')
        toast.success(string, {
        position: "bottom-right"});
    }


// <ToastContainer transition={bounce} />