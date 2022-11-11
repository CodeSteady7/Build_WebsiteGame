import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import jwt_decode from "jwt-decode";
import {
  GetServerSideProps,
  JWTPayloadTypes,
  UserTypes,
} from "../../../services/data-types/index";
import { getTransactionDetail } from "../../../services/member";
import { HistoryTransactionTypes } from "../../../services/data-types/index";

interface TransactionsDetailsProps {
  transactionDetail: HistoryTransactionTypes;
}

export default function TransactionsDetail(props: TransactionsDetailsProps) {
  const { transactionDetail } = props;
  return (
    <section className='transactions-detail overflow-auto'>
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { token } = req.cookies;

  const { idTrx } = params!;

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
  const response = await getTransactionDetail(idTrx, jwtToken);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
