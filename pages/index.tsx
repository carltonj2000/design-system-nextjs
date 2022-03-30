import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Design System With NextJs</h1>
      <p>
        The{" "}
        <a href="https://youtu.be/lRaL-8qZ0mM">
          Create a Design System with CSS
        </a>{" "}
        video was followed for the challenge below.
      </p>
      <ul>
        <li>
          23m00s CSS Variable Substitution solutions{" "}
          <Link href="/01_challenge">
            <a>01</a>
          </Link>
          ,{" "}
          <Link href="/01a_challenge">
            <a>01a</a>
          </Link>
          .
        </li>
        <li>
          30m00s Design System HTML colors{" "}
          <Link href="/02_designsystem">
            <a>02</a>
          </Link>
          .
        </li>
      </ul>
    </div>
  );
}
