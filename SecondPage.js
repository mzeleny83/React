import React, { useState } from "react";

const SecondPage = () => {
  const [url, setUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQrCodeUrl(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button type="submit">Generate QR Code</button>
      </form>
      {qrCodeUrl && <img src={qrCodeUrl} alt="Generated QR Code" />}
    </div>
  );
};

export default SecondPage;
