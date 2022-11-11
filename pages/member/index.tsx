import jwt_decode from "jwt-decode";
import OverviewContent from "../../components/organisms/OverviewContent";
import Sidebar from "../../components/organisms/Sidebar";
import {
  JWTPayloadTypes,
  UserTypes,
  GetServerSideProps,
} from "../../services/data-types/index";

export default function Member() {
  return (
    <section className='overview overflow-auto'>
      <Sidebar activeMenu='overview' />
      <OverviewContent />
    </section>
  );
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwt_decode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avater = `${IMG}/${userFromPayload.avater}`;

  return {
    props: {
      user: userFromPayload,
    },
  };
}
