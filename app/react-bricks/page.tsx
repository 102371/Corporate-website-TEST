export default function ReactBricksPage() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-4">React Bricks CMS Integration</h1>
      <p className="text-gray-600 mb-6">
        React Bricks CMS is integrated and ready to use. Configure your API keys in the
        environment variables to start using the CMS.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="font-semibold mb-4 text-xl">Setup Instructions:</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Sign up at <a href="https://www.reactbricks.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">reactbricks.com</a></li>
          <li>Create a new project</li>
          <li>Get your App ID and API Key from the dashboard</li>
          <li>Create a <code className="bg-gray-200 px-2 py-1 rounded">.env.local</code> file in the root directory and add:
            <pre className="bg-gray-800 text-white p-4 rounded mt-2 text-sm overflow-x-auto">
{`NEXT_PUBLIC_REACT_BRICKS_APP_ID=your_app_id
NEXT_PUBLIC_REACT_BRICKS_API_KEY=your_api_key
NEXT_PUBLIC_REACT_BRICKS_ENVIRONMENT=production`}
            </pre>
          </li>
          <li>Restart your development server</li>
        </ol>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <h3 className="font-semibold mb-2 text-blue-900">Available Content Blocks:</h3>
        <ul className="list-disc list-inside space-y-1 text-blue-800">
          <li>HeroBrick - Hero section with title, subtitle, and CTA</li>
          <li>FeatureBrick - Feature card with icon, title, and description</li>
          <li>ServiceBrick - Service card with icon, title, description, and link</li>
          <li>TestimonialBrick - Testimonial with rating, content, name, and role</li>
          <li>CTABrick - Call-to-action section</li>
        </ul>
        <p className="mt-4 text-blue-700 text-sm">
          These blocks are located in the <code className="bg-blue-100 px-2 py-1 rounded">bricks/</code> directory and can be customized to match your needs.
        </p>
      </div>
    </div>
  )
}

