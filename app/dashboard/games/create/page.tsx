import SaveGame from "@/components/games/SaveGame";

export default async function CreatePage({
  searchParams,
}: {
  searchParams: { message: string };
}) {

  return (
    <div>
        <SaveGame />
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
    </div>
  );
}
