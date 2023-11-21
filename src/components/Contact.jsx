import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

const Contact = () => {
  const { user, isAuthenticated } = useAuth0();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qxtckyk",
        "template_9smcxnf",
        form.current,
        "DC4X0zq3Rb7KMjzQc"
      )
      .then(
        (result) => {
          toast.success("Gửi tin nhắn thành công !");
        },
        (error) => {
          toast.error("Gửi tin nhắn thất bại !");
        }
      );
  };

  return (
    <form
      className="MuiBox-root css-164r41r form-message"
      noValidate=""
      onSubmit={sendEmail}
      ref={form}
    >
      <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu">
        <label
          className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeMedium MuiInputLabel-outlined css-n43zjz"
          data-shrink="true"
          htmlFor="email"
          id="email-label"
        >
          Email của bạn
          <span
            aria-hidden="true"
            className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1"
          >
             *
          </span>
        </label>
        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1h6tflo">
          <input
            aria-invalid="false"
            autoComplete="email"
            id="email"
            name="user_email"
            required=""
            type="text"
            className="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"
            defaultValue={user?.email}
          />
          <fieldset
            aria-hidden="true"
            className="MuiOutlinedInput-notchedOutline css-igs3ac"
          >
            <legend className="css-14lo706">
              <span>Email của bạn *</span>
            </legend>
          </fieldset>
        </div>
      </div>
      <div className="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu">
        <label
          className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeMedium MuiInputLabel-outlined css-n43zjz"
          data-shrink="true"
          htmlFor="message"
          id="message-label"
        >
          Tin nhắn
          <span
            aria-hidden="true"
            className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1"
          >
             *
          </span>
        </label>
        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-multiline css-9xtlz1">
          <textarea
            rows={4}
            aria-invalid="false"
            id="message"
            name="message"
            required=""
            className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline css-u36398"
            style={{ height: 92 }}
            defaultValue={"Tôi cần trợ giúp bài tập về nhà!"}
          />
          <textarea
            aria-hidden="true"
            className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline css-u36398"
            readOnly=""
            tabIndex={-1}
            style={{
              visibility: "hidden",
              position: "absolute",
              overflow: "hidden",
              height: 0,
              top: 0,
              left: 0,
              transform: "translateZ(0px)",
              paddingTop: 0,
              paddingBottom: 0,
              width: "306.4px",
            }}
            defaultValue={""}
          />
          <fieldset
            aria-hidden="true"
            className="MuiOutlinedInput-notchedOutline css-igs3ac"
          >
            <legend className="css-14lo706">
              <span>Tin nhắn *</span>
            </legend>
          </fieldset>
        </div>
      </div>
      <button
        className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-1pcspeu"
        tabIndex={0}
        type="submit"
      >
        Yêu cầu hỗ trợ!
        <span className="MuiTouchRipple-root css-w0pj6f" />
      </button>
    </form>
  );
};

export default Contact;
