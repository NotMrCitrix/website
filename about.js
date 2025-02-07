import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center text-yellow-700 mt-4"
      >
        Learn More About Straight Banana 🍌
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-8 text-lg max-w-3xl mx-auto text-center"
      >
        <p>
          At Straight Banana, we are dedicated to reshaping the banana industry (literally!).
          Our mission is to bring innovation, sustainability, and joy to fruit lovers worldwide.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4"
      >
        <Card className="p-6 bg-white shadow-md">
          <CardContent>
            <h3 className="text-xl font-bold text-yellow-800">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              Straight Banana was founded to tackle the age-old problem of crooked and gay bananas. Using groundbreaking technology, we make bananas more user-friendly and aesthetically pleasing.
            </p>
          </CardContent>
        </Card>

        <Card className="p-6 bg-white shadow-md">
          <CardContent>
            <h3 className="text-xl font-bold text-yellow-800">Our Technology</h3>
            <p className="mt-2 text-gray-600">
              We employ cutting-edge machinery and innovative techniques to ensure each banana is perfectly straight without compromising its natural taste or texture.
            </p>
          </CardContent>
        </Card>

        <Card className="p-6 bg-white shadow-md">
          <CardContent>
            <h3 className="text-xl font-bold text-yellow-800">Sustainability</h3>
            <p className="mt-2 text-gray-600">
              Straight Banana is committed to sustainable farming practices, reducing waste, and supporting local farmers to create a better future for all.
            </p>
          </CardContent>
        </Card>

        <Card className="p-6 bg-white shadow-md">
          <CardContent>
            <h3 className="text-xl font-bold text-yellow-800">Global Impact</h3>
            <p className="mt-2 text-gray-600">
              Our vision goes beyond straight bananas. We aim to create a world where everyone can enjoy perfectly straight, eco-friendly fruits that arent gay.
            </p>
          </CardContent>
        </Card>

        <Card className="p-6 bg-white shadow-md">
          <CardContent>
            <h3 className="text-xl font-bold text-yellow-800">Customer Feedback</h3>
            <p className="mt-2 text-gray-600">
              "Straight Bananas have changed my life! They're so easy to pack and eat." - John Vtuber.
            </p>
          </CardContent>
        </Card>

        <Card className="p-6 bg-white shadow-md">
          <CardContent>
            <h3 className="text-xl font-bold text-yellow-800">Join the Movement</h3>
            <p className="mt-2 text-gray-600">
              Become part of the Straight Banana family. Together, we can straighten the world one banana at a time.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-12 text-center"
      >
        <a
          href="/"
          className="bg-yellow-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-yellow-600"
        >
          Back to Home
        </a>
      </motion.div>
    </div>
  );
};

export default LearnMore;
