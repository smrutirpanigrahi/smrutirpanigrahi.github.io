const siteData = {
    hero: {
        name: "Smruti Ranjan Panigrahi",
        title: "Senior Data Engineer",
        bio: "Strategic engineer with 8+ years of experience leading the design, development and deployment of enterprise-scale data applications and platforms. I combine deep data engineering expertise with a full-stack background to build scalable, secure, and automated solutions on Google Cloud.",
        resume: "assets/Resume-Smruti Ranjan Panigrahi.pdf"
    },
    experience: [
        {
            year: "2021",
            role: "Senior Data Engineer",
            company: "Nine Entertainment",
            location: "Sydney",
            period: "Sep 2021 - Present",
            details: [
                "<strong>Cubes Modernization:</strong> Led a greenfield data modelling project migrating the AdSales domain's Inventory Pricing model from legacy MOLAP cubes to a serverless GCP architecture using BigQuery and dbt, supporting Nine's brands including <em>9Now</em>, <em>Channel 9</em>, <em>9Go</em>, <em>9Life</em>, and radio mastheads <em>2GB</em> & <em>3AW</em>.",
                "<strong>Data Pipeline Architecture:</strong> Designed data ingestion pipelines from 12+ sources to model and load data into BigQuery for the Enterprise Reporting semantic layer, empowering users with DIY reporting tools and templated reports in Tableau.",
                "<strong>Data Security & Governance:</strong> Led development of a custom enterprise access control solution using ServiceNow forms and workflow automation integrated with BigQuery Row-Level Security, enabling secure and auditable access to AdSales data for sales users. Achieved 99.7% success rate over 3 years while significantly reducing access risk and strengthening data governance.",
                "<strong>AI Innovation:</strong> Engineered an AI-powered financial reporting agent using Google's ADK and MCP architecture, reducing manual processing by 75%."
            ]
        },
        {
            year: "2020",
            role: "Business Consultant (Internship)",
            company: "Pearson Australia",
            location: "Australia",
            period: "Jul 2020 - Aug 2020",
            details: [
                "Devised a comprehensive growth strategy for the digital education sector, identifying key market entry points.",
                "Acted as a liaison between business and technical teams, translating complex business needs into clear technical specifications.",
                "Conducted in-depth market and competitor analysis to provide data-driven strategic recommendations."
            ]
        },
        {
            year: "2015",
            role: "Technology Analyst",
            company: "Infosys Ltd.",
            location: "India",
            period: "May 2015 - Mar 2019",
            details: [
                "<strong>Pipeline Architecture:</strong> Architected end-to-end ETL/ELT pipelines on GCP & Open-Source Spark Stack, coordinating delivery across distributed teams.",
                "<strong>Technical Leadership:</strong> Developed a configurable framework in Scala/Spark to integrate diverse data sources (Oracle, Salesforce) into BigQuery.",
                "<strong>CDP Development:</strong> Contributed to a Customer Data Platform utilizing Spark, Scala, Elasticsearch, and MongoDB.",
                "<strong>Tech Champion:</strong> Created gamified learning courses and upskilled colleagues on Hadoop and Spark ecosystems."
            ]
        }
    ],
    skills: [
        {
            category: "Cloud & Big Data Architecture",
            items: [
                "Google Cloud Platform (GCP)", "BigQuery", "Dataproc", "Dataflow",
                "Cloud Composer", "Pub/Sub", "Apache Spark", "Kafka", "Apache Airflow"
            ]
        },
        {
            category: "Languages & Frameworks",
            items: [
                "Python", "Scala", "Advanced SQL", "Java", "Unix Shell", "Streamlit"
            ]
        },
        {
            category: "Tools & DevOps",
            items: [
                "Terraform (IaC)", "dbt (Data Build Tool)", "CI/CD Pipelines",
                "Snyk", "Elasticsearch", "Looker Studio", "Tableau"
            ]
        }
    ],
    projects: [
        {
            title: "Cubes Modernization - MOLAP to BigQuery Migration",
            description: "Led a greenfield data modelling project migrating the AdSales domain's Inventory Pricing model from legacy MOLAP cubes to a serverless GCP architecture using BigQuery and dbt, supporting Nine's brands including 9Now, Channel 9, 9Go, 9Life, and radio mastheads 2GB & 3AW.",
            tags: "#BigQuery #dbt #Migration #GCP #DataModelling"
        },
        {
            title: "Data Pipeline Design/Architecture using Airflow",
            description: "Designed and orchestrated data ingestion pipelines using Apache Airflow from 12+ sources to model and load data into BigQuery for the Enterprise Reporting semantic layer, empowering users with DIY reporting tools and templated reports in Tableau.",
            tags: "#BigQuery #DataPipelines #Tableau #SemanticLayer"
        },
        {
            title: "Data Security & Governance",
            description: "Led development of a custom enterprise access control solution using ServiceNow forms and workflow automation integrated with BigQuery Row-Level Security. Achieved 99.7% success rate over 3 years while significantly reducing access risk and strengthening data governance.",
            tags: "#Security #Governance #ServiceNow #BigQueryRLS"
        },
        {
            title: "AI Exploration - Inventory Pricing Agent",
            description: "Engineered an AI-powered Inventory Pricing agent using Google's ADK and MCP architecture, reducing manual processing by 75%. Eliminated key-person dependencies through intelligent automation and context engineering.",
            tags: "#AI #Automation #GCP #ADK"
        }
    ],
    insights: [
        {
            title: "AI Excellence at Nine: Redefining Problem Solving 🚀",
            excerpt: "Thrilled to share this feature spotlight on our internal AI initiative at Nine! This program is redefining how we solve problems by embedding smart support that understands context, boosting efficiency, creativity, and confidence across the team.",
            date: "Nov 2025",
            link: "https://www.linkedin.com/posts/smrutirpanigrahi_ai-excellence-carousel-activity-7392323651343245312-Jot-",
            tags: "#AIforDevs #AIExcellence #Innovation"
        },
        {
            title: "The Next Frontier is Not Prompting, It's Context Engineering 🧠",
            excerpt: "Context engineering is the natural next step after prompt engineering. The real work is in the context pipeline: Retrieval (RAG), Structuring (schema like MCP), Pruning (removing noise), and Delivery (optimal input to LLM). It's becoming as critical as managing sophisticated ETL data pipelines.",
            date: "Oct 2025",
            link: "https://www.linkedin.com/posts/smrutirpanigrahi_the-next-frontier-is-not-prompting-its-activity-7379680824931184640-rkZ9",
            tags: "#AI #ContextEngineering #LLMs"
        },
        {
            title: "Building Autonomous Agents: MCP x A2A Framework",
            excerpt: "The key to truly autonomous enterprise agents isn't one protocol, it's two. A2A provides the communication layer for agent-to-agent coordination, while MCP gives agents a standardized I/O framework for connecting with external tools. This layering is the architecture blueprint for scalable multi-agent systems.",
            date: "Oct 2025",
            link: "https://www.linkedin.com/posts/smrutirpanigrahi_the-key-to-truly-autonomous-enterprise-agents-activity-7378326383690702848-fZ3i",
            tags: "#AI #MCP #AutonomousAgents"
        },
        {
            title: "Monash Expo Winner: Smartacus - Fight the Fake",
            excerpt: "Excited to share that our team won the Monash Industry Experience Expo 2021! We built Smartacus - a web app and Chrome extension using NLP to detect fake reviews on TripAdvisor and Yelp, helping travelers identify authentic feedback in the hospitality industry.",
            date: "May 2021",
            link: "https://www.linkedin.com/posts/smrutirpanigrahi_monashuniversity-pgieexpo-expo2021-activity-6803193604534890496-LCry",
            tags: "#NLP #MachineLearning #SocialGood"
        }
    ]
};
