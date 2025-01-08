
import { useGetJobsQuery } from "../../redux/api/baseApi";

const AllJobs = () => {
  // Fetch jobs using the RTK Query hook
  const { data: jobs, isLoading, isError, error } = useGetJobsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error(error);
    return <div className="m-3 p-4">Error loading jobs: {error?.data?.detail || error?.message}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 m-3">
      <h1 className="text-3xl font-semibold text-center mb-6">Job List</h1>
      <div className="max-w-4xl mx-auto">
        {jobs && jobs.length > 0 ? (
          <div className="grid gap-4">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow rounded-lg border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {job.title}
                </h2>
                <p className="text-gray-600 mt-2">{job.description}</p>
                <div className="text-sm text-gray-500 mt-4">
                  <p>Created by: User {job.created_by}</p>
                  <p>Created at: {new Date(job.created_at).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No jobs available.</p>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
