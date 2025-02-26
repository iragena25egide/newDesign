import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const notifications = [
  { id: 1, message: "New message from Alice", date: "2025-02-23" },
  { id: 2, message: "Your order has been shipped", date: "2025-02-22" },
  { id: 3, message: "Reminder: Meeting at 3 PM", date: "2025-02-21" },
  { id: 4, message: "New message from Alice", date: "2025-02-23" },
  { id: 5, message: "Your order has been shipped", date: "2025-02-22" },
  { id: 6, message: "Reminder: Meeting at 3 PM", date: "2025-02-21" },
  { id: 7, message: "New message from Alice", date: "2025-02-23" },
  { id: 9, message: "Your order has been shipped", date: "2025-02-22" },
  { id: 10, message: "Reminder: Meeting at 3 PM", date: "2025-02-21" }
];

const NotificationPage = () => {
  return (
    <div className="min-h-screen mt-10 bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <Card className="rounded-lg shadow-xl border border-gray-300 bg-white">
          <div className="px-4 py-2 text-lg font-semibold border-b">
            Notifications
          </div>
          <div className="max-h-96 overflow-auto">
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  className="py-2 px-4 rounded-md flex flex-col gap-1 mb-2 hover:bg-gray-50 transition-colors"
                >
                  <div className="text-sm font-medium text-gray-800">
                    {notif.message}
                  </div>
                  <div className="text-xs text-gray-500">{notif.date}</div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">
                No notifications
              </div>
            )}
          </div>
        </Card>
        <div className="mt-4 text-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
