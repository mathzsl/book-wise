import { useAuthButtons } from "@/components/AuthButtons/Root";
import * as AuthButton from "../../components/AuthButtons";

export default function Login() {
  return (
    <div className="w-full max-w-sm space-y-10">
      <div>
        <h1 className="text-grayApp-100 text-2xl">Boas vindas!</h1>
        <span className="text-grayApp-200">
          Faça seu login ou acesse como visitante.
        </span>
      </div>

      <AuthButton.Root>
        <AuthButton.Trigger type="button">
          <AuthButton.Prefix
            src="./images/icons/google.svg"
            alt="Google logo"
          />
          Entrar com Google
        </AuthButton.Trigger>

        <AuthButton.Trigger type="button">
          <AuthButton.Prefix
            src="./images/icons/github.svg"
            alt="Github logo"
          />
          Entrar com Github
        </AuthButton.Trigger>

        <AuthButton.Trigger type="button">
          <AuthButton.Prefix
            src="./images/icons/rocket.svg"
            alt="Rocket logo"
          />
          Entrar como visiante
        </AuthButton.Trigger>
      </AuthButton.Root>
    </div>
  );
}
