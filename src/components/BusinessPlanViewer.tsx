
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, FileText, Share2 } from 'lucide-react';
import { toast } from 'sonner';

interface BusinessPlanViewerProps {
  businessPlan: string;
  projectTitle?: string;
}

const BusinessPlanViewer = ({ businessPlan, projectTitle }: BusinessPlanViewerProps) => {
  const [activeTab, setActiveTab] = useState('formatted');

  const downloadAsMarkdown = () => {
    const blob = new Blob([businessPlan], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${projectTitle || 'business-plan'}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Business plan downloaded as Markdown');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(businessPlan);
    toast.success('Business plan copied to clipboard');
  };

  const formatBusinessPlan = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-2xl font-bold mt-8 mb-4 text-bpspecs-dark-charcoal border-b-2 border-bpspecs-teal pb-2">{line.replace('# ', '')}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-xl font-semibold mt-6 mb-3 text-bpspecs-olive">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-lg font-medium mt-4 mb-2 text-bpspecs-taupe">{line.replace('### ', '')}</h3>;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="mb-2 text-bpspecs-dark-charcoal leading-relaxed">{line}</p>;
    });
  };

  return (
    <Card className="w-full max-w-5xl mx-auto bg-bpspecs-off-white border-bpspecs-taupe/30">
      <CardHeader className="border-b border-bpspecs-taupe/20">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-bpspecs-dark-charcoal flex items-center gap-2">
              <FileText className="w-5 h-5 text-bpspecs-teal" />
              {projectTitle || 'Business Plan Specification'}
            </CardTitle>
            <CardDescription className="text-bpspecs-taupe">
              Generated AI business plan ready for review and export
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={copyToClipboard}
              variant="outline"
              size="sm"
              className="border-bpspecs-taupe/30 hover:bg-bpspecs-beige/30"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Copy
            </Button>
            <Button
              onClick={downloadAsMarkdown}
              size="sm"
              className="bg-bpspecs-teal hover:bg-bpspecs-teal/90 text-bpspecs-off-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="formatted">Formatted View</TabsTrigger>
            <TabsTrigger value="raw">Raw Markdown</TabsTrigger>
          </TabsList>
          
          <TabsContent value="formatted" className="space-y-4">
            <div className="prose prose-lg max-w-none">
              {formatBusinessPlan(businessPlan)}
            </div>
          </TabsContent>
          
          <TabsContent value="raw" className="space-y-4">
            <div className="bg-bpspecs-beige/30 rounded-lg p-4 border border-bpspecs-taupe/20">
              <pre className="whitespace-pre-wrap text-sm text-bpspecs-dark-charcoal overflow-x-auto">
                {businessPlan}
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BusinessPlanViewer;
