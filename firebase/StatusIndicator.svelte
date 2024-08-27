<script>
  import { firebaseConnectionState } from "@lib/firebase";
  import { SignedIn } from "sveltefire";
</script>

<SignedIn>
  <small>
    <div class="float">
      <div class={$firebaseConnectionState ? " shimmer-bar" : ""}></div>
    </div>
    <div>
      {$firebaseConnectionState || "Saved"}
    </div>
  </small>
</SignedIn>

<style>
  .float {
    position: fixed;
    top: 0;
    width: 100%;
  }

  .shimmer-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      rgba(255, 223, 0, 0) 25%,
      rgba(255, 223, 0, 0.5) 50%,
      rgba(255, 223, 0, 0) 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    z-index: 9999;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
</style>
