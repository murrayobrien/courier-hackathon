export const getFirebaseCredentials = () => {
  const credentials = {
    type: "service_account",
    project_id: process.env.project_id,
    private_key_id: process.env.project_id,
    private_key: process.env.private_key
      ? JSON.parse(process.env.private_key)
      : undefined,
    client_email: process.env.client_email,
    client_id: process.env.client_id,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: process.env.client_x509_cert_url,
  };
  return credentials;
};
