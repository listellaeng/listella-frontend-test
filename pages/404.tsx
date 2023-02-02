import Link from "next/link";

export default function Error404() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1>404 - Not Found</h1>
      <h4>The resource request could not be found on this page.</h4>
      <h5>
        Navigate to <Link href="/">Home Page</Link>
      </h5>
    </div>
  );
}
