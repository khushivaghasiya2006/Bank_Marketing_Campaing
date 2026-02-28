// import {
//   Binary,
//   Brain,
//   Code2,
//   Database,
//   Layers,
//   LineChart,
//   Server,
//   Shield,
// } from 'lucide-react';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';

// export default function About() {
//   const technologies = [
//     {
//       icon: Brain,
//       name: 'Machine Learning',
//       description:
//         'Scikit-learn for model training and predictions using classification algorithms.',
//     },
//     {
//       icon: Code2,
//       name: 'Flask API',
//       description:
//         'Python Flask backend serving predictions via RESTful API endpoints.',
//     },
//     {
//       icon: Server,
//       name: 'Next.js 13',
//       description:
//         'Modern React framework with App Router for optimal performance.',
//     },
//     {
//       icon: Layers,
//       name: 'shadcn/ui',
//       description:
//         'Beautiful, accessible component library built with Radix UI and Tailwind CSS.',
//     },
//     {
//       icon: Database,
//       name: 'Data Processing',
//       description:
//         'Pandas and NumPy for efficient data manipulation and analysis.',
//     },
//     {
//       icon: LineChart,
//       name: 'Model Optimization',
//       description:
//         'Hyperparameter tuning and cross-validation for optimal accuracy.',
//     },
//   ];

//   const projectSteps = [
//     {
//       title: 'Data Collection & Exploration',
//       description:
//         'Analyzed the Bank Marketing dataset containing customer demographics and campaign results.',
//     },
//     {
//       title: 'Feature Engineering',
//       description:
//         'Selected key features including age, balance, duration, campaign count and previous contacts.',
//     },
//     {
//       title: 'Model Training',
//       description:
//         'Trained classification models using scikit-learn with proper scaling and validation.',
//     },
//     {
//       title: 'API Development',
//       description:
//         'Built Flask REST API for predictions and model serving.',
//     },
//     {
//       title: 'Frontend Integration',
//       description:
//         'Created responsive Next.js interface with real-time predictions.',
//     },
//     {
//       title: 'Testing & Deployment',
//       description:
//         'Comprehensive testing and deployment-ready configuration.',
//     },
//   ];

//   return (
//     <div className="flex flex-col">
//       {/* HERO SECTION */}
//       <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
//         <div className="container">
//           <div className="mx-auto max-w-4xl text-center">
//             <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white/80 px-6 py-3 text-sm font-medium shadow-lg backdrop-blur dark:border-blue-800 dark:bg-gray-800/80">
//               <Shield className="h-5 w-5 text-blue-600" />
//               <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 About This Project
//               </span>
//             </div>

//             <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
//               Bank Marketing
//               <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 Prediction System
//               </span>
//             </h1>

//             <p className="mx-auto text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
//               A machine learning solution that predicts customer subscription to term deposits,
//               helping banks optimize marketing campaigns.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* OVERVIEW SECTION */}
//       <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
//         <div className="container">
//           <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-3">

//             <Card className="shadow-lg">
//               <CardHeader className="text-center">
//                 <Binary className="mx-auto h-8 w-8 text-blue-600" />
//                 <CardTitle>Dataset</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-center">
//                   Bank Marketing dataset with customer demographics and campaign data.
//                 </CardDescription>
//               </CardContent>
//             </Card>

//             <Card className="shadow-lg">
//               <CardHeader className="text-center">
//                 <Brain className="mx-auto h-8 w-8 text-purple-600" />
//                 <CardTitle>Algorithm</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-center">
//                   Classification model built using scikit-learn.
//                 </CardDescription>
//               </CardContent>
//             </Card>

//             <Card className="shadow-lg">
//               <CardHeader className="text-center">
//                 <LineChart className="mx-auto h-8 w-8 text-green-600" />
//                 <CardTitle>Accuracy</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-center">
//                   Optimized using cross-validation and hyperparameter tuning.
//                 </CardDescription>
//               </CardContent>
//             </Card>

//           </div>
//         </div>
//       </section>

//       {/* TECHNOLOGIES SECTION */}
//       <section className="py-16">
//         <div className="container mx-auto max-w-5xl">
//           <h2 className="mb-10 text-center text-3xl font-bold">
//             Technologies Used
//           </h2>

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {technologies.map((tech, index) => (
//               <Card key={index} className="shadow-md">
//                 <CardHeader className="text-center">
//                   <tech.icon className="mx-auto h-8 w-8 text-indigo-600" />
//                   <CardTitle>{tech.name}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <CardDescription className="text-center">
//                     {tech.description}
//                   </CardDescription>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* DEVELOPMENT PROCESS SECTION */}
//       <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 dark:from-gray-800 dark:via-teal-800 dark:to-cyan-900">
//         <div className="container">
//           <div className="mx-auto max-w-4xl">
//             <div className="mb-12 text-center">
//               <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
//                 Development Process
//               </h2>
//               <p className="text-gray-700 dark:text-gray-300">
//                 Step-by-step approach from data analysis to deployment with modern development practices
//               </p>
//             </div>

//             <div className="space-y-6">
//               {projectSteps.map((step, index) => (
//                 <div
//                   key={index}
//                   className="group relative flex gap-6 rounded-xl border-0 bg-white/90 p-6 shadow-lg backdrop-blur dark:bg-gray-800/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
//                 >
//                   {/* Glow effect */}
//                   <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-emerald-400 transition-all duration-500"></div>
                  
//                   <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
//                     <span className="text-lg">{index + 1}</span>
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors duration-300">
//                       {step.title}
//                     </h3>
//                     <p className="text-gray-700 dark:text-gray-300">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import {
  Binary,
  Brain,
  Code2,
  Database,
  Layers,
  LineChart,
  Server,
  Shield,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function About() {
  const technologies = [
    {
      icon: Brain,
      name: 'Machine Learning',
      description:
        'Scikit-learn for model training and predictions using classification algorithms.',
    },
    {
      icon: Code2,
      name: 'Flask API',
      description:
        'Python Flask backend serving predictions via RESTful API endpoints.',
    },
    {
      icon: Server,
      name: 'Next.js 13',
      description:
        'Modern React framework with App Router for optimal performance.',
    },
    {
      icon: Layers,
      name: 'shadcn/ui',
      description:
        'Beautiful, accessible component library built with Radix UI and Tailwind CSS.',
    },
    {
      icon: Database,
      name: 'Data Processing',
      description:
        'Pandas and NumPy for efficient data manipulation and analysis.',
    },
    {
      icon: LineChart,
      name: 'Model Optimization',
      description:
        'Hyperparameter tuning and cross-validation for optimal accuracy.',
    },
  ];

  const projectSteps = [
    {
      title: 'Data Collection & Exploration',
      description:
        'Analyzed the Bank Marketing dataset containing customer demographics and campaign results.',
    },
    {
      title: 'Feature Engineering',
      description:
        'Selected key features including age, balance, duration, campaign count and previous contacts.',
    },
    {
      title: 'Model Training',
      description:
        'Trained classification models using scikit-learn with proper scaling and validation.',
    },
    {
      title: 'API Development',
      description:
        'Built Flask REST API for predictions and model serving.',
    },
    {
      title: 'Frontend Integration',
      description:
        'Created responsive Next.js interface with real-time predictions.',
    },
    {
      title: 'Testing & Deployment',
      description:
        'Comprehensive testing and deployment-ready configuration.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* HERO SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br 
      from-emerald-50 via-teal-50 to-cyan-100
      dark:from-gray-900 dark:via-teal-900 dark:to-cyan-950">

        <div className="max-w-5xl mx-auto text-center space-y-10">

          <div className="inline-flex items-center gap-3 rounded-full 
          border border-emerald-300 bg-white/90 px-6 py-3 text-sm font-medium 
          shadow-xl backdrop-blur transition-all duration-300 
          hover:scale-105 hover:shadow-2xl 
          dark:border-emerald-700 dark:bg-gray-800/90">
            <Shield className="h-5 w-5 text-emerald-600 animate-pulse" />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              About This Project
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight 
          text-gray-900 dark:text-white">
            Bank Marketing
            <span className="block bg-gradient-to-r 
            from-emerald-600 to-cyan-600 
            bg-clip-text text-transparent">
              Prediction System
            </span>
          </h1>

          <p className="mx-auto text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            A machine learning solution that predicts customer subscription
            to term deposits and helps banks optimize marketing strategy.
          </p>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br 
      from-teal-50 via-cyan-50 to-emerald-100
      dark:from-gray-800 dark:via-cyan-900 dark:to-emerald-950">

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">

          {[ 
            { icon: Binary, title: "Dataset", desc: "Bank Marketing dataset with customer demographics and campaign data." },
            { icon: Brain, title: "Algorithm", desc: "Classification model built using scikit-learn." },
            { icon: LineChart, title: "Accuracy", desc: "Optimized using cross-validation and hyperparameter tuning." }
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="group relative border-0 shadow-xl 
                bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg 
                transition-all duration-500 
                hover:-translate-y-4 hover:shadow-2xl"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 
                  items-center justify-center rounded-full 
                  bg-gradient-to-r from-emerald-500 to-teal-600 
                  text-white shadow-lg 
                  transition-all duration-500 
                  group-hover:scale-125 group-hover:rotate-6">
                    <Icon className="h-6 w-6" />
                  </div>

                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center">
                  <CardDescription className="text-gray-700 dark:text-gray-300">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
            Technologies Used
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg 
                bg-white/90 dark:bg-gray-800/90 
                transition-all duration-500 
                hover:-translate-y-3 hover:shadow-2xl"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 
                  items-center justify-center rounded-full 
                  bg-gradient-to-r from-emerald-500 to-cyan-600 
                  text-white shadow-md 
                  group-hover:scale-110 transition-all duration-500">
                    <tech.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{tech.name}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-center">
                    {tech.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br 
      from-emerald-50 via-teal-50 to-cyan-100
      dark:from-gray-900 dark:via-teal-900 dark:to-cyan-950">

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
            Development Process
          </h2>

          <div className="space-y-8">
            {projectSteps.map((step, index) => (
              <div
                key={index}
                className="group relative flex gap-6 rounded-xl 
                bg-white/80 dark:bg-gray-800/80 
                p-6 shadow-xl backdrop-blur 
                transition-all duration-500 
                hover:-translate-y-2 hover:shadow-2xl hover:scale-102"
              >
                {/* Glow border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent 
                group-hover:border-emerald-400 transition-all duration-500"></div>
                
                <div className="relative flex h-12 w-12 items-center justify-center 
                rounded-full bg-gradient-to-r 
                from-emerald-500 to-teal-600 
                text-white font-bold text-lg shadow-md
                transition-all duration-500
                group-hover:scale-125 group-hover:rotate-6">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white
                  group-hover:text-emerald-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
