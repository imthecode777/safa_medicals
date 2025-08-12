import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { MessageSquarePlus, Heart } from "lucide-react";

const Newsletter = () => {
  const handlePostReview = () => {
    toast({
      title: "Post a review",
      description: "Review submission coming soon. Thanks for the support!"
    });
  };

  return (
    <section id="newsletter" className="bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>Support & Reviews</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-display font-bold mb-4 text-left">Post a review</h2>
          <p className="text-xl text-gray-700 mb-10 text-left flex items-center gap-2">
            <Heart className="text-pulse-500" aria-hidden="true" />
            Show your support — share your feedback and help us improve.
          </p>
          
          <div className="flex w-full">
            <Button size="lg" className="w-full rounded-full" onClick={handlePostReview} aria-label="Post a review">
              <MessageSquarePlus className="mr-2" aria-hidden="true" />
              Post a review
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;