// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { TrendingUp, Users, Target, BarChart3, ArrowRight, Brain, Shield, Zap, Sparkles, Star, Rocket, Heart, Activity } from 'lucide-react';

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section className="flex-1 flex flex-col justify-center py-20 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 dark:from-gray-900 dark:via-teal-800 dark:to-cyan-900">
//         <div className="max-w-6xl mx-auto text-center space-y-8">
//           <div className="space-y-6">
//             <div className="inline-flex items-center gap-3 rounded-full border border-emerald-300 bg-white/90 px-6 py-3 text-sm font-medium shadow-xl backdrop-blur dark:border-emerald-700 dark:bg-gray-800/90">
//               <Rocket className="h-5 w-5 text-emerald-600" />
//               <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
//                 Next-Gen Banking Intelligence
//               </span>
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
//               AI-Powered
//               <span className="block bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
//                 Marketing Analytics
//               </span>
//             </h1>
//             <p className="mx-auto text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
//               Transform your banking strategy with intelligent customer insights and
//               predictive analytics. Maximize ROI with data-driven decisions.
//             </p>
//           </div>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:from-emerald-600 hover:to-teal-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
//               <Link href="/loan">
//                 Try Analytics <Star className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//             <Button asChild variant="outline" size="lg" className="rounded-full border-emerald-400 bg-white/70 px-8 py-4 text-lg font-semibold text-emerald-800 shadow-lg backdrop-blur hover:bg-emerald-50 hover:border-emerald-500 dark:border-emerald-600 dark:bg-gray-800/70 dark:text-emerald-400 dark:hover:bg-gray-800/50 transition-all duration-300">
//               <Link href="/about">
//                 Explore Features <Heart className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-100 dark:from-gray-800 dark:via-cyan-800 dark:to-emerald-900">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="mb-6 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
//               Why Choose Our Platform?
//             </h2>
//             <p className="mx-auto text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
//               Revolutionary AI-powered banking analytics with real-time insights and
//               predictive intelligence for modern financial institutions.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-800 dark:to-gray-900 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
//               <CardHeader className="text-center">
//                 <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
//                   <Activity className="h-6 w-6" />
//                 </div>
//                 <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
//                   Real-Time Analytics
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="text-center">
//                 <CardDescription className="text-gray-700 dark:text-gray-300">
//                   Live dashboard with instant insights and predictive modeling
//                   for immediate decision making and campaign optimization.
//                 </CardDescription>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-xl bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
//               <CardHeader className="text-center">
//                 <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
//                   <TrendingUp className="h-6 w-6" />
//                 </div>
//                 <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
//                   Predictive Intelligence
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="text-center">
//                 <CardDescription className="text-gray-700 dark:text-gray-300">
//                   Advanced ML algorithms analyze customer behavior patterns and
//                   predict future actions with remarkable accuracy.
//                 </CardDescription>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
//               <CardHeader className="text-center">
//                 <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
//                   <Target className="h-6 w-6" />
//                 </div>
//                 <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
//                   Smart Targeting
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="text-center">
//                 <CardDescription className="text-gray-700 dark:text-gray-300">
//                   Precision customer segmentation and personalized campaign
//                   strategies for maximum conversion and engagement.
//                 </CardDescription>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-800 dark:to-gray-900 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
//               <CardHeader className="text-center">
//                 <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
//                   <Users className="h-6 w-6" />
//                 </div>
//                 <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
//                   Customer Insights
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="text-center">
//                 <CardDescription className="text-gray-700 dark:text-gray-300">
//                   Deep behavioral analysis and preference mapping for
//                   hyper-personalized banking experiences and retention strategies.
//                 </CardDescription>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-800 dark:to-gray-900 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
//               <CardHeader className="text-center">
//                 <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
//                   <BarChart3 className="h-6 w-6" />
//                 </div>
//                 <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
//                   Performance Metrics
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="text-center">
//                 <CardDescription className="text-gray-700 dark:text-gray-300">
//                   Comprehensive KPI tracking, A/B testing capabilities, and
//                   ROI optimization tools for campaign success measurement.
//                 </CardDescription>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-900 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
//               <CardHeader className="text-center">
//                 <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
//                   <Shield className="h-6 w-6" />
//                 </div>
//                 <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
//                   Enterprise Security
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="text-center">
//                 <CardDescription className="text-gray-700 dark:text-gray-300">
//                   Bank-level encryption, compliance frameworks, and advanced
//                   threat detection for complete data protection and privacy.
//                 </CardDescription>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-800 dark:to-teal-900">
//         <div className="max-w-4xl mx-auto text-center space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Ready to Revolutionize Your Banking?
//           </h2>
//           <p className="mx-auto text-xl text-emerald-100 max-w-3xl">
//             Experience the future of financial analytics today. Transform your marketing
//             with AI-powered insights and predictive intelligence that drives results.
//           </p>
//           <Button asChild size="lg" className="rounded-full bg-white text-emerald-700 px-8 py-4 text-lg font-semibold shadow-2xl hover:bg-emerald-50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
//             <Link href="/loan">
//               Start Free Trial <Star className="ml-2 h-5 w-5" />
//             </Link>
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// }


import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  Users,
  Target,
  BarChart3,
  ArrowRight,
  Shield,
  Rocket,
  Star,
  Heart,
  Activity
} from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center py-20 px-4 
      bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 
      dark:from-gray-900 dark:via-teal-900 dark:to-cyan-950">

        <div className="max-w-6xl mx-auto text-center space-y-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full 
          border border-emerald-300 bg-white/90 px-6 py-3 text-sm font-medium 
          shadow-xl backdrop-blur transition-all duration-300 
          hover:scale-105 hover:shadow-2xl dark:border-emerald-700 dark:bg-gray-800/90">
            <Rocket className="h-5 w-5 text-emerald-600 animate-pulse" />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Next-Gen Banking Intelligence
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight 
          text-gray-900 dark:text-white">
           Intelligent
            <span className="block bg-gradient-to-r from-emerald-600 to-cyan-600 
            bg-clip-text text-transparent animate-gradient-x">
              Bank Marketing Analytics
            </span>
          </h1>

          <p className="mx-auto text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            Transform your banking strategy with intelligent customer insights
            and predictive analytics.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            <Button
              asChild
              size="lg"
              className="relative overflow-hidden rounded-full 
              bg-gradient-to-r from-emerald-500 to-teal-600 
              px-8 py-4 text-lg font-semibold text-white 
              shadow-xl transition-all duration-300 
              hover:scale-110 hover:shadow-2xl"
            >
              <Link href="/loan">
                Try Analytics
                <Star className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-emerald-400 
              px-8 py-4 text-lg font-semibold 
              transition-all duration-300 
              hover:scale-105 hover:bg-emerald-100 
              dark:hover:bg-gray-800"
            >
              <Link href="/about">
                Explore Features
                <Heart className="ml-2 h-5 w-5 transition-all duration-300 hover:text-red-500" />
              </Link>
            </Button>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 
      bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-100 
      dark:from-gray-800 dark:via-cyan-900 dark:to-emerald-950">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Why Choose Our Platform?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[ 
              { icon: Activity, title: "Real-Time Analytics", desc: "Live dashboard with predictive modeling." },
              { icon: TrendingUp, title: "Predictive Intelligence", desc: "Advanced ML analyzing behavior patterns." },
              { icon: Target, title: "Smart Targeting", desc: "Precision segmentation for high conversion." },
              { icon: Users, title: "Customer Insights", desc: "Deep behavioral mapping for personalization." },
              { icon: BarChart3, title: "Performance Metrics", desc: "KPI tracking & ROI optimization tools." },
              { icon: Shield, title: "Enterprise Security", desc: "Bank-level encryption and compliance." }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="group relative border-0 shadow-xl 
                  bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg 
                  transition-all duration-500 
                  hover:-translate-y-4 hover:shadow-2xl"
                >
                  {/* Glow border */}
                  <div className="absolute inset-0 rounded-xl border 
                  border-transparent group-hover:border-emerald-400 
                  transition-all duration-500"></div>

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
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-center">
                    <CardDescription className="text-gray-700 dark:text-gray-300">
                      {feature.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}

          </div>
        </div>
      </section>

    </div>
  )
}
