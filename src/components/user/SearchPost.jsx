import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faFilter, 
  faCalendar,
  faUser,
  faTag,
  faFileLines,
  faChartSimple,
  faArrowUp,
  faArrowDown,
  faCircleExclamation
} from '@fortawesome/free-solid-svg-icons';

// Mock data for demonstration
const mockPosts = [
    { id: 1, title: 'Missing Person: John Doe', author: 'Jane Smith', date: '2023-10-15', tags: ['addis ababa', 'male'], likes: 42, comments: 8 },
    { id: 2, title: 'Found: Child in Bole Area', author: 'John Doe', date: '2023-10-12', tags: ['bole', 'child'], likes: 28, comments: 5 },
    { id: 3, title: 'Looking for my sister', author: 'Alex Johnson', date: '2023-10-10', tags: ['female', '25-30'], likes: 57, comments: 12 },
    { id: 4, title: 'Found documents near Mexico', author: 'Maria Garcia', date: '2023-10-08', tags: ['documents', 'found'], likes: 31, comments: 7 },
    { id: 5, title: 'Missing elderly woman', author: 'David Kim', date: '2023-10-05', tags: ['elderly', 'addis ababa'], likes: 89, comments: 15 },
  ];
const mockReports = [
    { id: 1, title: 'Report on Missing Child', author: 'Sarah Connor', date: '2023-10-14', type: 'missing', views: 120, status: 'published' },
    { id: 2, title: 'Found Person Report', author: 'John Connor     ', date: '2023-10-11', type: 'found', views: 85, status: 'draft' },
    { id: 3, title: 'Daily Report on Missing Cases', author: 'Linda Hamilton', date: '2023-10-09', type: 'daily', views: 200, status: 'published' },
    { id: 4, title: 'Weekly Summary of Found Persons', author: 'Kyle Reese', date: '2023-10-07', type: 'weekly', views: 150, status: 'review' },
    { id: 5, title: 'Monthly Report on Missing Cases', author: 'Sarah Connor', date: '2023-10-01', type: 'monthly', views: 300, status: 'published' },
  ];

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    sortBy: 'date',
    sortOrder: 'desc',
    dateRange: 'all',
    tags: [],
    status: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Filter results based on search query and filters
    const filteredResults = activeTab === 'posts' 
      ? filterPosts(mockPosts, searchQuery, filters)
      : filterReports(mockReports, searchQuery, filters);
    
    setResults(filteredResults);
  }, [activeTab, searchQuery, filters]);

  const filterPosts = (posts, query, filters) => {
    return posts
      .filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.author.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      )
      .sort((a, b) => {
        if (filters.sortBy === 'date') {
          return filters.sortOrder === 'asc' 
            ? new Date(a.date) - new Date(b.date) 
            : new Date(b.date) - new Date(a.date);
        } else if (filters.sortBy === 'likes') {
          return filters.sortOrder === 'asc' ? a.likes - b.likes : b.likes - a.likes;
        } else if (filters.sortBy === 'comments') {
          return filters.sortOrder === 'asc' ? a.comments - b.comments : b.comments - a.comments;
        }
        return 0;
      });
  };

  const filterReports = (reports, query, filters) => {
    return reports
      .filter(report => 
        report.title.toLowerCase().includes(query.toLowerCase()) ||
        report.author.toLowerCase().includes(query.toLowerCase()) ||
        report.type.toLowerCase().includes(query.toLowerCase())
      )
      .sort((a, b) => {
        if (filters.sortBy === 'date') {
          return filters.sortOrder === 'asc' 
            ? new Date(a.date) - new Date(b.date) 
            : new Date(b.date) - new Date(a.date);
        } else if (filters.sortBy === 'views') {
          return filters.sortOrder === 'asc' ? a.views - b.views : b.views - a.views;
        }
        return 0;
      })
      .filter(report => 
        filters.status === 'all' || report.status === filters.status
      );
  };

  const handleSortChange = (sortBy) => {
    if (filters.sortBy === sortBy) {
      setFilters({...filters, sortOrder: filters.sortOrder === 'asc' ? 'desc' : 'asc'});
    } else {
      setFilters({...filters, sortBy, sortOrder: 'desc'});
    }
  };

  const renderPosts = () => (
    <div className="space-y-4">
      {results.map(post => (
        <div key={post.id} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
          <div className="flex flex-wrap items-center mt-2 text-sm text-gray-600">
            <span className="flex items-center mr-4">
              <FontAwesomeIcon icon={faUser} className="mr-1 text-blue-500" />
              {post.author}
            </span>
            <span className="flex items-center mr-4">
              <FontAwesomeIcon icon={faCalendar} className="mr-1 text-blue-500" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center mr-4">
              <FontAwesomeIcon icon={faArrowUp} className="mr-1 text-green-500" />
              {post.likes} likes
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faFileLines} className="mr-1 text-gray-500" />
              {post.comments} comments
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderReports = () => (
    <div className="space-y-4">
      {results.map(report => (
        <div key={report.id} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-800">{report.title}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              report.status === 'published' ? 'bg-green-100 text-green-800' :
              report.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              {report.status}
            </span>
          </div>
          <div className="flex flex-wrap items-center mt-2 text-sm text-gray-600">
            <span className="flex items-center mr-4">
              <FontAwesomeIcon icon={faUser} className="mr-1 text-blue-500" />
              {report.author}
            </span>
            <span className="flex items-center mr-4">
              <FontAwesomeIcon icon={faCalendar} className="mr-1 text-blue-500" />
              {new Date(report.date).toLocaleDateString()}
            </span>
            <span className="flex items-center mr-4">
              <FontAwesomeIcon icon={faChartSimple} className="mr-1 text-purple-500" />
              {report.views} views
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faTag} className="mr-1 text-gray-500" />
              {report.type}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Search Content</h1>
          <p className="mt-2 text-lg text-gray-600">Find posts and reports across the platform</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-3 px-6 font-medium text-sm rounded-t-lg ${activeTab === 'posts' ? 'bg-white border-t border-l border-r border-gray-200 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('posts')}
          >
            <FontAwesomeIcon icon={faFileLines} className="mr-2" />
            Posts ({mockPosts.length})
          </button>
          <button
            className={`py-3 px-6 font-medium text-sm rounded-t-lg ${activeTab === 'reports' ? 'bg-white border-t border-l border-r border-gray-200 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('reports')}
          >
            <FontAwesomeIcon icon={faChartSimple} className="mr-2" />
            Reports ({mockReports.length})
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="absolute right-2 top-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-600"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FontAwesomeIcon icon={faFilter} className="mr-1" />
            Filters
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort by</label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleSortChange('date')}
                    className={`px-3 py-1 rounded-full text-sm ${filters.sortBy === 'date' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'}`}
                  >
                    Date {filters.sortBy === 'date' && (
                      <FontAwesomeIcon icon={filters.sortOrder === 'asc' ? faArrowUp : faArrowDown} className="ml-1" />
                    )}
                  </button>
                  {activeTab === 'posts' ? (
                    <>
                      <button
                        onClick={() => handleSortChange('likes')}
                        className={`px-3 py-1 rounded-full text-sm ${filters.sortBy === 'likes' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'}`}
                      >
                        Likes {filters.sortBy === 'likes' && (
                          <FontAwesomeIcon icon={filters.sortOrder === 'asc' ? faArrowUp : faArrowDown} className="ml-1" />
                        )}
                      </button>
                      <button
                        onClick={() => handleSortChange('comments')}
                        className={`px-3 py-1 rounded-full text-sm ${filters.sortBy === 'comments' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'}`}
                      >
                        Comments {filters.sortBy === 'comments' && (
                          <FontAwesomeIcon icon={filters.sortOrder === 'asc' ? faArrowUp : faArrowDown} className="ml-1" />
                        )}
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleSortChange('views')}
                      className={`px-3 py-1 rounded-full text-sm ${filters.sortBy === 'views' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'}`}
                    >
                      Views {filters.sortBy === 'views' && (
                        <FontAwesomeIcon icon={filters.sortOrder === 'asc' ? faArrowUp : faArrowDown} className="ml-1" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              {activeTab === 'reports' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={filters.status}
                    onChange={(e) => setFilters({...filters, status: e.target.value})}
                  >
                    <option value="all">All Statuses</option>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="review">In Review</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Results */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            {results.length} {activeTab} found
          </h2>
          {results.length === 0 && searchQuery && (
            <button 
              className="text-sm text-blue-600 hover:text-blue-800"
              onClick={() => setSearchQuery('')}
            >
              Clear search
            </button>
          )}
        </div>

        {results.length > 0 ? (
          activeTab === 'posts' ? renderPosts() : renderReports()
        ) : (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <FontAwesomeIcon icon={faCircleExclamation} className="text-yellow-500 text-4xl mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No {activeTab} found</h3>
            <p className="text-gray-500">
              {searchQuery 
                ? `No results found for "${searchQuery}". Try adjusting your search or filters.`
                : `No ${activeTab} available at the moment.`
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;