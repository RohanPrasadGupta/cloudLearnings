import UploadForm from "@/components/UploadForm";
import SubmissionsList from "@/components/SubmissionsList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Image Upload App
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Upload Image
            </h2>
            <UploadForm />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Recent Submissions
            </h2>
            <SubmissionsList />
          </div>
        </div>
      </div>
    </main>
  );
}
