import { SignatureVR } from "./SignatureVR"; // Adjust path accordingly

const Example = () => {
  return (
    <form className="space-y-4 p-6 bg-gray-100 rounded-lg shadow-lg">
      <SignatureVR header="Dette regnes som helsemessige begrensninger">
        <p>
          Med helsemessige begrensninger mener vi funksjonshemming, sykdom,
          allergier som hindrer deg i arbeidet eller andre årsaker som må tas
          hensyn til når du skal finne nytt arbeid. Du må oppgi hva som gjelder
          for deg, og dokumentere de helsemessige årsakene du viser til.
        </p>
      </SignatureVR>
    </form>
  );
};

export default Example;
