'use client';

import { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Info,
  Loader2,
  TrendingUp,
  BarChart3,
  PieChart,
  Target,
  Shield,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

interface FormData {
  age: string;
  job: string;
  marital: string;
  education: string;
  default: string;
  housing: string;
  loan: string;
  balance: string;
  contact: string;
  day: string;
  month: string;
  duration: string;
  campaign: string;
  pdays: string;
  previous: string;
  poutcome: string;
}

interface PredictionResult {
  prediction: string;
  confidence: number;
  probability: number;
}

export default function LoanPage() {
  const [formData, setFormData] = useState<FormData>({
    age: '',
    job: '',
    marital: '',
    education: '',
    default: '',
    housing: '',
    loan: '',
    balance: '',
    contact: '',
    day: '',
    month: '',
    duration: '',
    campaign: '',
    pdays: '',
    previous: '',
    poutcome: '',
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const payload = {
        age: parseFloat(formData.age),
        job: formData.job,
        marital: formData.marital,
        education: formData.education,
        default: formData.default,
        housing: formData.housing,
        loan: formData.loan,
        balance: parseFloat(formData.balance),
        contact: formData.contact,
        day: parseFloat(formData.day),
        month: formData.month,
        duration: parseFloat(formData.duration),
        campaign: parseFloat(formData.campaign),
        pdays: parseFloat(formData.pdays),
        previous: parseFloat(formData.previous),
        poutcome: formData.poutcome,
      };

      const response = await fetch('http://127.0.0.1:5000/loan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Prediction failed');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to connect to API'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      age: '',
      job: '',
      marital: '',
      education: '',
      default: '',
      housing: '',
      loan: '',
      balance: '',
      contact: '',
      day: '',
      month: '',
      duration: '',
      campaign: '',
      pdays: '',
      previous: '',
      poutcome: '',
    });
    setResult(null);
    setError(null);
  };

  const formFields = [
    {
      name: 'age',
      label: 'Age',
      placeholder: '30',
      description: 'Customer age (18-95)',
      type: 'number',
      min: 18,
      max: 95,
    },
    {
      name: 'job',
      label: 'Job Type',
      description: 'Type of job occupation',
      type: 'select',
      options: [
        { value: 'admin.', label: 'Admin' },
        { value: 'technician', label: 'Technician' },
        { value: 'services', label: 'Services' },
        { value: 'management', label: 'Management' },
        { value: 'retired', label: 'Retired' },
        { value: 'purple-collar', label: 'Purple-collar' },
        { value: 'housemaid', label: 'Housemaid' },
        { value: 'entrepreneur', label: 'Entrepreneur' },
        { value: 'self-employed', label: 'Self-employed' },
        { value: 'unemployed', label: 'Unemployed' },
        { value: 'student', label: 'Student' },
        { value: 'unknown', label: 'Unknown' },
      ],
    },
    {
      name: 'marital',
      label: 'Marital Status',
      description: 'Marital status',
      type: 'select',
      options: [
        { value: 'married', label: 'Married' },
        { value: 'single', label: 'Single' },
        { value: 'divorced', label: 'Divorced' },
        { value: 'unknown', label: 'Unknown' },
      ],
    },
    {
      name: 'education',
      label: 'Education Level',
      description: 'Highest education level',
      type: 'select',
      options: [
        { value: 'primary', label: 'Primary' },
        { value: 'secondary', label: 'Secondary' },
        { value: 'tertiary', label: 'Tertiary' },
        { value: 'unknown', label: 'Unknown' },
      ],
    },
    {
      name: 'default',
      label: 'Credit Default',
      description: 'Has credit in default?',
      type: 'select',
      options: [
        { value: 'no', label: 'No' },
        { value: 'yes', label: 'Yes' },
        { value: 'unknown', label: 'Unknown' },
      ],
    },
    {
      name: 'housing',
      label: 'Housing Loan',
      description: 'Has housing loan?',
      type: 'select',
      options: [
        { value: 'no', label: 'No' },
        { value: 'yes', label: 'Yes' },
        { value: 'unknown', label: 'Unknown' },
      ],
    },
    {
      name: 'loan',
      label: 'Personal Loan',
      description: 'Has personal loan?',
      type: 'select',
      options: [
        { value: 'no', label: 'No' },
        { value: 'yes', label: 'Yes' },
        { value: 'unknown', label: 'Unknown' },
      ],
    },
    {
      name: 'balance',
      label: 'Average Balance',
      placeholder: '1500',
      description: 'Average yearly balance in euros',
      type: 'number',
      min: -10000,
      max: 200000,
    },
    {
      name: 'contact',
      label: 'Contact Type',
      description: 'Contact communication type',
      type: 'select',
      options: [
        { value: 'cellular', label: 'Cellular' },
        { value: 'telephone', label: 'Telephone' },
        { value: 'unknown', label: 'Unknown' },
      ],
    },
    {
      name: 'day',
      label: 'Day of Month',
      placeholder: '15',
      description: 'Last contact day of month',
      type: 'number',
      min: 1,
      max: 31,
    },
    {
      name: 'month',
      label: 'Month',
      description: 'Last contact month',
      type: 'select',
      options: [
        { value: 'jan', label: 'January' },
        { value: 'feb', label: 'February' },
        { value: 'mar', label: 'March' },
        { value: 'apr', label: 'April' },
        { value: 'may', label: 'May' },
        { value: 'jun', label: 'June' },
        { value: 'jul', label: 'July' },
        { value: 'aug', label: 'August' },
        { value: 'sep', label: 'September' },
        { value: 'oct', label: 'October' },
        { value: 'nov', label: 'November' },
        { value: 'dec', label: 'December' },
      ],
    },
    {
      name: 'duration',
      label: 'Last Contact Duration',
      placeholder: '180',
      description: 'Duration of last contact in seconds',
      type: 'number',
      min: 0,
      max: 5000,
    },
    {
      name: 'campaign',
      label: 'Campaign Contacts',
      placeholder: '2',
      description: 'Number of contacts during this campaign',
      type: 'number',
      min: 1,
      max: 100,
    },
    {
      name: 'pdays',
      label: 'Days Since Last Contact',
      placeholder: '-1',
      description: 'Days since last contact (-1 if never contacted)',
      type: 'number',
      min: -1,
      max: 1000,
    },
    {
      name: 'previous',
      label: 'Previous Contacts',
      placeholder: '0',
      description: 'Number of contacts before this campaign',
      type: 'number',
      min: 0,
      max: 100,
    },
    {
      name: 'poutcome',
      label: 'Previous Outcome',
      description: 'Outcome of previous marketing campaign',
      type: 'select',
      options: [
        { value: 'failure', label: 'Failure' },
        { value: 'success', label: 'Success' },
        { value: 'other', label: 'Other' },
        { value: 'unknown', label: 'Unknown' },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 dark:from-gray-900 dark:via-teal-800 dark:to-cyan-950 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-300 bg-white/90 px-6 py-3 text-sm font-medium shadow-xl backdrop-blur dark:border-emerald-700 dark:bg-gray-800/90">
              <Shield className="h-5 w-5 text-emerald-600 animate-pulse" />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                AI-Powered Bank Marketing Prediction
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Term Deposit
              <span className="block bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Subscription Prediction
              </span>
            </h1>

            <p className="mx-auto text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              Enter comprehensive customer information to get accurate predictions about term deposit subscription likelihood. 
              Our advanced ML model analyzes 16+ features for precise insights.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-100 dark:from-gray-800 dark:via-cyan-900 dark:to-emerald-950">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <Card className="border-0 shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <div className="rounded-lg bg-white/20 p-2">
                    <Target className="h-6 w-6" />
                  </div>
                  Customer Information Form
                </CardTitle>
                <CardDescription className="text-emerald-100">
                  Complete all fields for the most accurate prediction results
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {formFields.map((field) => (
                        <div key={field.name} className="space-y-3">
                          <Label htmlFor={field.name} className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            {field.label}
                          </Label>
                          {field.type === 'select' ? (
                            <Select
                              value={formData[field.name as keyof FormData]}
                              onValueChange={(value) => handleSelectChange(field.name, value)}
                              required
                            >
                              <SelectTrigger className="h-11 border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 focus:border-emerald-500 focus:ring-emerald-500">
                                <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
                              </SelectTrigger>
                              <SelectContent className="max-h-60">
                                {field.options?.map((option) => (
                                  <SelectItem key={option.value} value={option.value} className="hover:bg-emerald-50 dark:hover:bg-gray-700">
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          ) : (
                            <Input
                              id={field.name}
                              name={field.name}
                              type={field.type}
                              placeholder={field.placeholder}
                              value={formData[field.name as keyof FormData]}
                              onChange={handleChange}
                              min={field.min}
                              max={field.max}
                              required
                              className="h-11 border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 focus:border-emerald-500 focus:ring-emerald-500"
                            />
                          )}
                          <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                            {field.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <Button 
                        type="submit" 
                        disabled={loading} 
                        className="flex-1 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold shadow-lg transition-all duration-200"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                            Analyzing Customer Profile...
                          </>
                        ) : (
                          <>
                            <Zap className="mr-3 h-5 w-5" />
                            Get Prediction
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleReset}
                        className="h-12 px-8 border-emerald-400 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-600 dark:text-emerald-300 dark:hover:bg-gray-700 font-semibold"
                      >
                        Reset Form
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {result && (
                <>
                  <Card className="mt-6 border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-800 dark:to-gray-900">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg">
                        <Target className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        Prediction Analysis
                      </CardTitle>
                      <CardDescription className="text-gray-700 dark:text-gray-300">
                        Advanced ML-powered insights for this customer
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Main Prediction Result */}
                      <div className="rounded-xl border-2 border-emerald-200 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 text-center shadow-inner">
                        <div className="mb-4 flex items-center justify-center">
                          {result.prediction.includes('YES') ? (
                            <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-800 dark:bg-green-900 dark:text-green-200">
                              <CheckCircle2 className="h-5 w-5" />
                              <span className="font-semibold">High Potential</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-red-800 dark:bg-red-900 dark:text-red-200">
                              <AlertCircle className="h-5 w-5" />
                              <span className="font-semibold">Low Potential</span>
                            </div>
                          )}
                        </div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                          {result.prediction}
                        </p>
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Card className="border-0 shadow-md bg-white/80 dark:bg-gray-800/80 backdrop-blur">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3">
                              <div className="rounded-lg bg-emerald-100 p-3 dark:bg-emerald-900">
                                <BarChart3 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                  Confidence Score
                                </p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                  {result.confidence}%
                                </p>
                              </div>
                            </div>
                            <Progress 
                              value={result.confidence} 
                              className="mt-3 h-2" 
                              color={result.confidence > 70 ? 'green' : result.confidence > 40 ? 'yellow' : 'red'}
                            />
                          </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md bg-white/80 dark:bg-gray-800/80 backdrop-blur">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3">
                              <div className="rounded-lg bg-emerald-100 p-3 dark:bg-emerald-900">
                                <PieChart className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                  Probability
                                </p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                  {result.probability}
                                </p>
                              </div>
                            </div>
                            <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                              <div 
                                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                                style={{ width: `${result.probability * 100}%` }}
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Visual Graph */}
                      <Card className="border-0 shadow-md bg-white/80 dark:bg-gray-800/80 backdrop-blur">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Zap className="h-5 w-5 text-yellow-500" />
                            Prediction Confidence Visualization
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="relative h-40">
                            {/* Confidence Gauge */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="relative h-32 w-32">
                                <svg className="transform -rotate-90 w-32 h-32">
                                  <circle
                                    cx="64"
                                    cy="64"
                                    r="56"
                                    stroke="currentColor"
                                    strokeWidth="12"
                                    fill="none"
                                    className="text-gray-200 dark:text-gray-700"
                                  />
                                  <circle
                                    cx="64"
                                    cy="64"
                                    r="56"
                                    stroke="currentColor"
                                    strokeWidth="12"
                                    fill="none"
                                    strokeDasharray={`${2 * Math.PI * 56}`}
                                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - result.confidence / 100)}`}
                                    className={`transition-all duration-1000 ${
                                      result.confidence > 70 
                                        ? 'text-green-500' 
                                        : result.confidence > 40 
                                        ? 'text-yellow-500' 
                                        : 'text-red-500'
                                    }`}
                                  />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="text-center">
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                      {result.confidence}%
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                      Confidence
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Probability Bars */}
                          <div className="mt-6 space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                Will Subscribe
                              </span>
                              <div className="flex items-center gap-2">
                                <div className="w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                                  <div 
                                    className="h-2 bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500"
                                    style={{ width: `${result.probability * 100}%` }}
                                  />
                                </div>
                                <span className="text-sm font-bold text-gray-900 dark:text-white min-w-[3rem] text-right">
                                  {(result.probability * 100).toFixed(1)}%
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                Will Not Subscribe
                              </span>
                              <div className="flex items-center gap-2">
                                <div className="w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                                  <div 
                                    className="h-2 bg-gradient-to-r from-red-400 to-red-600 transition-all duration-500"
                                    style={{ width: `${(1 - result.probability) * 100}%` }}
                                  />
                                </div>
                                <span className="text-sm font-bold text-gray-900 dark:text-white min-w-[3rem] text-right">
                                  {((1 - result.probability) * 100).toFixed(1)}%
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Enhanced Interpretation */}
                      <Alert className={`border-0 ${
                        result.prediction.includes('YES') 
                          ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                          : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                      }`}>
                        <div className="flex items-center gap-2">
                          {result.prediction.includes('YES') ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                          )}
                          <AlertTitle className="font-semibold">
                            {result.prediction.includes('YES') ? 'High Value Prospect' : 'Low Probability Lead'}
                          </AlertTitle>
                        </div>
                        <AlertDescription className="mt-2">
                          {result.prediction.includes('YES')
                            ? `This customer shows strong indicators (${result.confidence}% confidence) for term deposit subscription. Prioritize immediate contact with personalized offers. Consider premium product recommendations based on their profile.`
                            : `This customer has low subscription probability (${(100 - result.confidence).toFixed(1)}% risk). Consider alternative marketing strategies or focus resources on higher-potential leads. Re-engage after 3-6 months with different approach.`}
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </>
              )}

              {error && (
                <Alert variant="destructive" className="mt-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
          </div>
        </div>
      </section>
    </div>
  );
}


