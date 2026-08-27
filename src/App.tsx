import { useGetMe } from "@/features/auth/hooks/use-get-me";
import { Avatar } from "@/shared/components/Avatar";

function App() {
  const { data: user } = useGetMe();

  return (
    <div>
      <img
        src="https://9qcvx1lg-3000.usw3.devtunnels.ms/public/uploads/75f80fc9e9bc344aa025de1f2864d44b"
        alt=""
      />
      Hello name: {user?.name} with email: {user?.email} with user id:{" "}
      {user?.id}
      <Avatar src={user?.avatarUrl || null} />
    </div>
  );
}

export default App;
