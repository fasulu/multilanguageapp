// import React from "react";
import { useTranslation } from "react-i18next"

const Profile = () => {
    const {t} = useTranslation(['home','common', 'profile']);

    return (
        <div className="container mt-5 col-9 col-md-6">
            <h1 className="text-center">
                {t("common:profile")}
            </h1>

            <div className="form-group">
                <label htmlFor="">{t("profile:name")}</label>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Rayyane"
                />
            </div>
            <div className="form-group">
                <label htmlFor="">{t("profile:age")}</label>
                <input
                    className="form-control"
                    type="number"
                    placeholder="18"
                />
            </div>
            <div className="form-group">
                <label htmlFor="">{t("profile:email")}</label>
                <input
                    className="form-control"
                    type="email"
                    placeholder="rayyane@frayyane.co.uk"
                />
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-end p-4">
                <button className="btn btn-success">{t("common:submit")}</button>
                <button className="btn btn-warning">{t("common:cancel")}</button>
            </div>  
        </div>
    );
}

// https://www.youtube.com/watch?v=baLjPx_wFi4

export default Profile;