/* =====================================================================
   ✏️  THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR PORTFOLIO
   ---------------------------------------------------------------------
   - Change any text between the quotes "..."
   - To add a new project: copy one { ... } block inside `projects`,
     paste it at the TOP of the list, and change the text.
   - Save the file, then re-upload / push (see README.md).
   ===================================================================== */

window.PORTFOLIO = {
  // ---------- BASIC INFO ----------
  name: "Parth Vaghasiya",
  initials: "PV",
  // These rotate with a typing animation in the hero section
  roles: ["AI Engineer", "Agentic AI Developer", "ML Engineer", "Energy + AI Enthusiast"],
  tagline:
    "I build multi-agent AI systems with LangChain, LangGraph and MCP, and ship them to production. Master's student in Smart Energy Systems, bringing AI into the energy sector.",
  location: "Nürnberg, Germany",
  email: "Parthvaghasiya1711@gmail.com",
  availableForWork: true, // shows the green "Available for work" badge
  photo: "", // e.g. "assets/me.jpg" — leave empty to show your initials
  resume: "", // e.g. "assets/resume.pdf" — leave empty to hide the button

  // The small floating cards around your photo
  highlights: [
    { icon: "🤖", text: "Agentic AI" },
    { icon: "⚡", text: "Energy × AI" },
  ],

  socials: [
    { name: "GitHub", url: "https://github.com/Parth6755" },
    { name: "LinkedIn", url: "https://linkedin.com/in/parth-vaghasiya-3181b6337" },
  ],

  // ---------- ABOUT ----------
  about: [
    "Hi! I'm Parth — a Master's student in Smart Energy Systems at Hochschule Ansbach with a B.Eng. in Mechanical Engineering, now focused on agentic AI and LLM applications.",
    "I build multi-agent systems with LangChain and LangGraph, connect external tools through MCP (Model Context Protocol), and deploy applications publicly — like ResearchMind AI, live on Render. I'm comfortable across Python, machine learning and API development with FastAPI.",
    "My background in energy systems and photovoltaics gives me real domain knowledge. I'm looking for roles in AI Engineering, Agentic AI Engineering or Forward Deployed Engineering — ideally in the energy sector.",
  ],
  stats: [
    { value: "20+", label: "Projects on GitHub" },
    { value: "1+", label: "Year industry experience" },
    { value: "3", label: "Languages spoken" },
  ],

  // ---------- SKILLS ----------
  skills: [
    { category: "Agentic AI & GenAI", items: ["LangChain", "LangGraph", "MCP", "Tool calling", "RAG", "Embeddings", "Prompt engineering", "Azure OpenAI"] },
    { category: "Backend & Integration", items: ["Python", "FastAPI", "REST APIs", "JSON", "Pydantic", "SQL"] },
    { category: "Machine & Deep Learning", items: ["scikit-learn", "XGBoost", "TensorFlow / Keras", "LSTM", "GRU", "Transformer", "Feature engineering"] },
    { category: "Data & Visualization", items: ["Pandas", "NumPy", "Streamlit", "Plotly", "Power BI", "Matplotlib", "Seaborn"] },
    { category: "Deployment & Tools", items: ["Docker", "Render", "Git", "GitHub", "AWS (learning)"] },
    { category: "Energy", items: ["Photovoltaics", "PVsyst", "PV*SOL", "Energy systems optimization", "LabVIEW"] },
  ],

  // ---------- PROJECTS (newest first) ----------
  // category is used by the filter buttons. image is optional.
  projects: [
    {
      title: "ResearchMind AI",
      description: "Multi-agent system for deep research built with LangGraph — specialized agents handle research, information gathering and report generation. External tools connected via MCP, FastAPI backend with a React frontend, deployed publicly on Render. LLM evaluation with LangSmith, RAGAS and DeepEval in progress.",
      image: "",
      tags: ["LangGraph", "LangChain", "MCP", "FastAPI", "React", "Render"],
      category: "Agentic AI",
      github: "https://github.com/Parth6755/researchmind-ai",
      live: "",
      featured: true,
    },
    {
      title: "Explainable Solar PV Forecasting",
      description: "Short-term PV power forecasting focused on explainability and uncertainty assessment, with a concept for an LLM-based layer that turns forecasts and uncertainties into plain-language explanations.",
      image: "",
      tags: ["Machine Learning", "Explainable AI", "Photovoltaics", "LLM"],
      category: "Energy",
      github: "",
      live: "",
      featured: true,
    },
    {
      title: "Expense Tracker MCP Server",
      description: "My first remote MCP (Model Context Protocol) server — exposes expense-tracking tools that AI assistants like Claude can call directly to add and query expenses.",
      image: "",
      tags: ["MCP", "Python", "Tool calling"],
      category: "Agentic AI",
      github: "https://github.com/Parth6755/expense-tracker-mcp",
      live: "",
      featured: false,
    },
    {
      title: "AutoLux — Car Price Prediction",
      description: "Full-stack used-car price estimator: a Random Forest model served by a FastAPI backend (/predict, /health) with Pydantic validation, plus a Streamlit frontend — deployed as two services on Render.",
      image: "",
      tags: ["Random Forest", "FastAPI", "Pydantic", "Streamlit", "Render"],
      category: "Machine Learning",
      github: "https://github.com/Parth6755/car-price-prediction-full-stack-",
      live: "",
      featured: false,
    },
    {
      title: "CardioCheck — Heart Stroke Risk",
      description: "Streamlit app estimating heart disease risk from 11 clinical inputs. Compared five classifiers on 918 patient records and deployed the best (KNN, 85.3% accuracy). Fixed a feature-order mismatch with a saved column schema.",
      image: "",
      tags: ["scikit-learn", "KNN", "Streamlit", "EDA"],
      category: "Machine Learning",
      github: "https://github.com/Parth6755/heart-stroke-risk-predictor",
      live: "",
      featured: false,
    },
    {
      title: "MNIST: Perceptron vs ANN vs CNN",
      description: "Compared three neural network architectures on handwritten digits: Perceptron 90.9%, ANN 97.5% and CNN 99.1% test accuracy — showing why convolutions win on image data.",
      image: "",
      tags: ["TensorFlow", "Keras", "CNN", "Computer Vision"],
      category: "Deep Learning",
      github: "https://github.com/Parth6755/mnist-digit-classification",
      live: "",
      featured: false,
    },
    {
      title: "LSTM Next-Word Predictor",
      description: "LSTM language model trained on 3,038 quotes (vocabulary of 8,978 words) for next-word prediction and multi-word text generation, served as an interactive Streamlit app.",
      image: "",
      tags: ["TensorFlow", "LSTM", "NLP", "Streamlit"],
      category: "Deep Learning",
      github: "https://github.com/Parth6755/lstm-next-word-predictor",
      live: "",
      featured: false,
    },
    {
      title: "Ford Car Price Prediction",
      description: "Linear regression on about 18,000 used Ford listings in the UK. Comparing one-hot vs label encoding raised R² from 0.73 to 0.84.",
      image: "",
      tags: ["scikit-learn", "Pandas", "Regression"],
      category: "Machine Learning",
      github: "https://github.com/Parth6755/ford-car-price-prediction",
      live: "",
      featured: false,
    },
    {
      title: "AURA AI — Amazon Reviews",
      description: "Analysis of 300,000 Amazon electronics reviews. Validated and cleaned the dataset; found 65.5% five-star reviews and 13% one- or two-star reviews.",
      image: "",
      tags: ["Python", "Pandas", "Jupyter"],
      category: "Data Analysis",
      github: "",
      live: "",
      featured: false,
    },
  ],

  // ---------- EXPERIENCE (newest first) ----------
  experience: [
    {
      role: "Product Developer — Hormone Test Strip Reader",
      company: "Engineius Technologies",
      period: "2024 — 2025",
      description: "Contributed to a camera- and sensor-based reader for test strips with control and test lines. Converted image data into an intensity array (0–255) as the basis for analysis and evaluation of control and test lines.",
      tech: ["Product development", "Sensor technology", "Image processing", "Measurement data"],
    },
  ],

  // ---------- EDUCATION ----------
  education: [
    {
      degree: "M.Sc. Smart Energy Systems",
      school: "Hochschule Ansbach, Germany",
      period: "04/2024 — Present",
      detail: "Focus: artificial intelligence, energy systems optimization, energy economics, photovoltaics.",
    },
    {
      degree: "B.Eng. Mechanical Engineering",
      school: "Gujarat Technological University, India",
      period: "06/2019 — 05/2023",
      detail: "",
    },
  ],

  // ---------- ACHIEVEMENTS, LANGUAGES & CERTIFICATES ----------
  achievements: [
    { icon: "📜", title: "EnergyNext Workshop", detail: "Energy Economics, Feuchtwangen (Hochschule Ansbach)", year: "" },
    { icon: "🌍", title: "Languages", detail: "English (C2) · German (B1) · Hindi (fluent)", year: "" },
    { icon: "📚", title: "Currently learning", detail: "AWS (S3, EC2, Lambda) · LLM evaluation (LangSmith, RAGAS, DeepEval)", year: "" },
  ],
};
