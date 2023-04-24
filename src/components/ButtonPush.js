import React from "react";
import addNotification from "react-push-notification";

const ButtonPush = () =>{
    const notificacion =() =>{
        addNotification({
            title: 'Axel Soto',
            message: 'Notificacion Push Funcionando',
            duration: 5000,
            native: true,
        });
    }
    return(
        <div className="col-12">
            <button onClick={notificacion} type="button" className="btn btn-success">Alerta Push</button>
        </div>
    );
};

export default ButtonPush;