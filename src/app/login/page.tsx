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

      <div className="flex flex-col gap-4">
        <AuthButton.Root>
          <AuthButton.Trigger type="button" provider="google">
            <AuthButton.Prefix
              src="./images/icons/google.svg"
              alt="Google logo"
            />
            Entrar com Google
          </AuthButton.Trigger>
        </AuthButton.Root>

        <AuthButton.Root>
          <AuthButton.Trigger type="button" provider="github">
            <AuthButton.Prefix
              src="./images/icons/github.svg"
              alt="Github logo"
            />
            Entrar com Github
          </AuthButton.Trigger>
        </AuthButton.Root>

        <AuthButton.Root>
          <AuthButton.Trigger type="button">
            <AuthButton.Prefix
              src="./images/icons/rocket.svg"
              alt="Rocket logo"
            />
            Entrar como visiante
          </AuthButton.Trigger>
        </AuthButton.Root>
      </div>
    </div>
  );
}
