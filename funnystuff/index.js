import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "2020", profit: 20000 },
  { name: "2021", profit: 120000 },
  { name: "2022", profit: 300000 },
  { name: "2023", profit: 500000 },
];

const StraightBanana = () => {
  return (
    <div className="min-h-screen bg-yellow-100 text-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-yellow-800 mt-4"
      >
        Straight Banana 🍌
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-xl mt-2"
      >
        <p className="font-semibold">"Make America Straight Again"</p>
      </motion.div>

      <motion.div
        className="my-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <LineChart
          width={600}
          height={300}
          data={data}
          className="mx-auto"
        >
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
        </LineChart>
        <p className="text-lg mt-4">Watch our profits grow as we revolutionize bananas!</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
      >
        <Card className="p-6 bg-white shadow-lg">
          <CardContent>
            <h2 className="text-2xl font-bold text-yellow-800">100% Straight Bananas</h2>
            <p className="mt-2 text-gray-600">We use cutting-edge technology to straighten bananas.</p>
          </CardContent>
        </Card>
        <Card className="p-6 bg-white shadow-lg">
          <CardContent>
            <h2 className="text-2xl font-bold text-yellow-800">Sustainable Farming</h2>
            <p className="mt-2 text-gray-600">Committed to eco-friendly practices and reducing waste.</p>
          </CardContent>
        </Card>
        <Card className="p-6 bg-white shadow-lg">
          <CardContent>
            <h2 className="text-2xl font-bold text-yellow-800">Global Impact</h2>
            <p className="mt-2 text-gray-600">Changing the world, one banana at a time.</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-12"
      >
        <Button className="bg-yellow-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-yellow-600">
          Learn More
        </Button>
      </motion.div>
    </div>
  );
};

export default StraightBanana;
