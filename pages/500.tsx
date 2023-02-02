import Link from "next/link";

export default function Error500() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1>505 - HTTP Version Not Supported</h1>
      <h4>The resource request could not be found.</h4>
      <h5>
        Navigate to <Link href="/">Home Page</Link>
      </h5>
    </div>
  );
}
