
import Navbar from "@/components/layout/Navbar";
import EditorComponent from "@/components/slides/Editor";

const Editor = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <EditorComponent />
      </main>
    </div>
  );
};

export default Editor;
