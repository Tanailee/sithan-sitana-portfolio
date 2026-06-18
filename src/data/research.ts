export const currentResearch = {
  title: "Fine-Tuning Large Language Models for Solving and Explaining Khmer Grade 7 Physics Word Problems",
  status: "In Progress",
  shortDescription: "Developing and evaluating a Khmer educational AI system that produces structured, accurate, and understandable physics solutions.",
  description: "My current research investigates the fine-tuning of large language models to solve and explain Grade 7 physics word problems in Khmer. The study focuses on improving response structure, numerical accuracy, Khmer-language quality, reasoning consistency, and the educational usefulness of generated solutions.",
  extendedDescription: "This research explores how large language models can be adapted for Khmer-language physics education. The project involves preparing a structured Khmer physics dataset, fine-tuning an instruction-following language model, and evaluating its ability to identify given information, select appropriate formulas, perform calculations, and generate understandable step-by-step explanations for Grade 7 learners.",
  background: "Khmer-language educational technology has limited support for structured physics problem solving. The research examines whether instruction fine-tuning can help a language model produce solutions that are both mathematically useful and understandable to Grade 7 learners.",
  problem: "The research problem is to adapt and evaluate a large language model for solving Khmer physics word problems while maintaining numerical accuracy, clear response structure, consistent reasoning, and appropriate Khmer-language explanations.",
  objectives: ["Prepare structured Khmer Grade 7 physics word problems for instruction fine-tuning", "Adapt an instruction-following language model to solve and explain the problems", "Evaluate extraction of given information, formula selection, calculations, reasoning consistency, Khmer-language quality, and educational usefulness"],
  datasetPreparation: ["Prepare Khmer physics word problems and structured solution components", "Organize given information, formulas, calculations, and explanations for evaluation", "Dataset preparation and documentation are currently being finalized."],
  fineTuningApproach: ["Use instruction fine-tuning for Khmer physics problem solving", "Model configuration details will be added after verification."],
  evaluationFramework: ["Response structure", "Numerical accuracy", "Khmer-language quality", "Reasoning consistency", "Educational usefulness of generated explanations"],
  currentProgress: ["Research is in progress", "Dataset preparation and methodology documentation are being finalized before evaluation."],
  results: ["Evaluation results will be published after the validation stage."],
  limitations: ["Limitations and future directions will be documented after evaluation."],
  ethicalConsiderations: ["Treat generated solutions as educational support rather than a substitute for teacher review", "Evaluate factual and numerical reliability before classroom use", "Document dataset provenance and protect any non-public educational material", "Communicate model limitations clearly to learners and educators"],
  futureWork: ["Future work will be documented after the methodology and evaluation stages are complete."],
  relatedLinks: [] as { label: string; href: string }[],
};

export const researchInterests = ["Large language models", "Khmer natural language processing", "AI for education", "Physics problem solving", "Instruction fine-tuning", "Model evaluation", "Responsible AI", "Applied machine learning"];

export const academicProjects = [
  { title: "Khmer N-Gram Text Generator", description: "Academic comparison of transparent backoff and interpolated 4-gram language models for Khmer text generation.", href: "/projects/khmer-text-generator" },
  { title: "Khmer Word Embeddings Explorer", description: "Khmer NLP study covering tokenization, skip-gram embeddings, PCA, clustering, and next-word modelling.", href: "/projects/nlp-khmer-embeddings" },
  { title: "Retail Sales Forecasting", description: "Forecasting study comparing classical time-series, harmonic-regression, and machine-learning approaches with diagnostic review.", href: "/projects/retail-sales-forecasting" },
];
