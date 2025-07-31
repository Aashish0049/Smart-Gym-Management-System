import React from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

import {
  Activity,
  Flame,
  HeartPulse,
  Moon,
  Droplet,
  Dumbbell,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const weeklyData = [
  { day: "Mon", mins: 30 },
  { day: "Tue", mins: 45 },
  { day: "Wed", mins: 20 },
  { day: "Thu", mins: 50 },
  { day: "Fri", mins: 35 },
  { day: "Sat", mins: 40 },
  { day: "Sun", mins: 25 },
];

const progressPlan = [
  { name: "Push Up", progress: 75 },
  { name: "Sit Up", progress: 40 },
  { name: "Knee Push Up", progress: 60 },
  { name: "Belly Fat Burner", progress: 30 },
];

const Dashboard = () => {
  return (
    <div className="bg-[#4a84a1] min-h-screen text-black p-6 space-y-6">
      <h1 className="text-3xl font-bold text-lime-400">🏋️‍♂️ Welcome to ZenGYM </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card className="bg-[#ffffff] p-4 rounded-2xl shadow-md hover:scale-105 transition">
          <div className="flex items-center gap-3">
            <Flame className="text-red-400" />
            <div>
              <p className="text-sm text-gray-400">Calories Burned</p>
              <p className="text-xl font-semibold">450 kcal</p>
            </div>
          </div>
        </Card>

        <Card className="bg-[#1e1e1e] p-4 rounded-2xl shadow-md hover:scale-105 transition">
          <div className="flex items-center gap-3">
            <HeartPulse className="text-pink-400" />
            <div>
              <p className="text-sm text-gray-400">Heart Rate</p>
              <p className="text-xl font-semibold">85 BPM</p>
            </div>
          </div>
        </Card>

        <Card className="bg-[#1e1e1e] p-4 rounded-2xl shadow-md hover:scale-105 transition">
          <div className="flex items-center gap-3">
            <Moon className="text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">Sleep</p>
              <p className="text-xl font-semibold">7 hrs</p>
            </div>
          </div>
        </Card>

        <Card className="bg-[#1e1e1e] p-4 rounded-2xl shadow-md hover:scale-105 transition">
          <div className="flex items-center gap-3">
            <Droplet className="text-cyan-400" />
            <div>
              <p className="text-sm text-gray-400">Water Intake</p>
              <p className="text-xl font-semibold">2.5 L</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Chart */}
        <Card className="bg-[#1e1e1e] col-span-2 p-4 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-lime-300">🗓️ Weekly Workout Activity</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={weeklyData}>
              <XAxis dataKey="day" stroke="#888" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="mins" stroke="#84cc16" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Progress Plan */}
        <Card className="bg-[#1e1e1e] p-4 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-lime-300">📋 Today's Plan</h2>
          <div className="space-y-4">
            {progressPlan.map((item, index) => (
              <div key={index}>
                <p className="text-sm">{item.name}</p>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-lime-400 h-2 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
