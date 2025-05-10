// Mock AI service to simulate responses

type MockResponse = {
  question: string;
  answer: string;
};

const mockResponses: MockResponse[] = [
  {
    question: "how do i sell my license",
    answer: "Selling your license through SoftSell is easy! First, create an account and upload your license details. Our team will verify it and provide a valuation within 24 hours. Once you accept the offer, you'll get paid within 3-5 business days."
  },
  {
    question: "what types of software licenses do you buy",
    answer: "We buy various types of software licenses including enterprise software (Microsoft, Adobe, SAP, Oracle), productivity tools, design software, development tools, and specialized industry software. If you're unsure if we accept your license, please submit it for review and our team will get back to you."
  },
  {
    question: "how much can i get for my license",
    answer: "The value of your license depends on several factors: the software type, remaining subscription time, original purchase price, and current market demand. On average, sellers receive between 40-70% of the remaining license value. Upload your license details for a free, no-obligation valuation."
  },
  {
    question: "how long does the process take",
    answer: "The typical process takes 5-7 business days from submission to payment. License verification takes 1-2 days, you'll receive an offer within 24 hours after verification, and payment processing takes 3-5 business days after you accept the offer."
  },
  {
    question: "is this legal",
    answer: "Yes, SoftSell operates completely legally. We only deal with transferable licenses that comply with the original software terms of service. Our legal team reviews all transactions to ensure compliance with applicable laws and software license agreements."
  }
];

export const getFallbackResponse = (): string => {
  return "I don't have specific information about that yet. Please contact our support team at support@softsell.example.com or fill out the contact form below, and we'll get back to you as soon as possible.";
};

export const getAIResponse = (userQuestion: string): Promise<string> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      const normalizedQuestion = userQuestion.toLowerCase().trim();
      
      const matchedResponse = mockResponses.find(item => 
        normalizedQuestion.includes(item.question)
      );
      
      if (matchedResponse) {
        resolve(matchedResponse.answer);
      } else {
        resolve(getFallbackResponse());
      }
    }, 800); // Simulate a delay for realism
  });
};

export const getSuggestedQuestions = (): string[] => {
  return [
    "How do I sell my license?",
    "What types of software licenses do you buy?",
    "How much can I get for my license?",
    "How long does the process take?",
    "Is this legal?"
  ];
};
