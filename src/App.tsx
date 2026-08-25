import { useGetMe } from "@/features/auth/hooks/use-get-me";

function App() {
  const { data: user } = useGetMe();

  return (
    <div>
      Hello {user?.name || user?.email} with user id: {user?.id}
    </div>
  );
}

export default App;
