"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

interface Submission {
  _id: string;
  name: string;
  email: string;
  image: string;
  createdAt: string;
}

const SubmissionsList: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await axios.get<Submission[]>(
        "http://localhost:5000/api/submissions"
      );
      setSubmissions(response.data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch submissions");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-600 text-center p-4">{error}</div>;
  }

  if (submissions.length === 0) {
    return (
      <div className="text-gray-500 text-center p-4">
        No submissions yet. Upload your first image!
      </div>
    );
  }

  return (
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {submissions.map((submission) => (
        <div
          key={submission._id}
          className="border border-gray-200 rounded-lg p-4"
        >
          <div className="flex items-start space-x-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={submission.image}
                alt={`${submission.name}'s submission`}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 truncate">
                {submission.name}
              </h3>
              <p className="text-sm text-gray-500 truncate">
                {submission.email}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {formatDate(submission.createdAt)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubmissionsList;
