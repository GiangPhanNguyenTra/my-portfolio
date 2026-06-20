import type { BlogPost } from "@/types/portfolio";

export const blogsData: BlogPost[] = [
  {
    id: "b1",
    title: "Optimizing Driver Matching to Under 5 Seconds",
    date: "Oct 12, 2025",
    category: "Backend Optimization",
    excerpt:
      "Exploring the integration of KDTree spatial indexing and ThreadPoolExecutor to handle massive concurrency in ride-hailing systems.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div className="space-y-4">
        <p>
          In the high-stakes world of ride-hailing, matching a driver to a
          passenger quickly is not just a feature - it is the core metric of
          success. During the development of my recent PoC, I faced a
          significant hurdle: how to search through thousands of active drivers
          and find the nearest available match in under 5 seconds under heavy
          load.
        </p>
        <h4 className="text-xl font-bold text-zinc-900 dark:text-white mt-6 mb-2">
          The KDTree Advantage
        </h4>
        <p>
          Traditional database queries (even with geospatial indexes) began to
          choke when concurrent requests spiked. I pivoted to maintaining a
          real-time <strong>KDTree (K-Dimensional Tree)</strong> in memory. A
          KDTree partitions space into a binary tree, turning a O(N)
          geographic search into an elegant O(log N) operation.
        </p>
        <h4 className="text-xl font-bold text-zinc-900 dark:text-white mt-6 mb-2">
          Multi-threading with ThreadPoolExecutor
        </h4>
        <p>
          Python&apos;s Global Interpreter Lock (GIL) is infamous, but for I/O
          bound and C-extension heavy operations (like SciPy&apos;s KDTree
          queries), <code>ThreadPoolExecutor</code> works wonders. By
          offloading the spatial query and the subsequent Redis state-locking
          mechanisms to a thread pool, the main FastAPI event loop remained
          completely unblocked.
        </p>
        <p>
          The result? The P99 latency for matching dropped from a sluggish 12
          seconds down to 3.8 seconds, cleanly hitting the SLA.
        </p>
      </div>
    ),
  },
  {
    id: "b2",
    title: "Architecting Enterprise RAG Pipelines with Llama-3",
    date: "Nov 05, 2025",
    category: "AI Integration",
    excerpt:
      "A deep dive into building scalable Retrieval-Augmented Generation systems using MongoDB Vector Search and open-source LLMs.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div className="space-y-4">
        <p>
          Retrieval-Augmented Generation (RAG) is the bridge between LLMs and
          proprietary enterprise data. However, moving a RAG pipeline from a
          Jupyter Notebook to a production environment is a massive leap.
        </p>
        <h4 className="text-xl font-bold text-zinc-900 dark:text-white mt-6 mb-2">
          Why MongoDB Vector Search?
        </h4>
        <p>
          I chose MongoDB Atlas Vector Search because it allowed me to keep
          document metadata and vector embeddings in the exact same collection.
          This eliminated the classic &quot;sync issue&quot; between a
          relational DB and a standalone vector DB like Pinecone or Milvus.
        </p>
        <h4 className="text-xl font-bold text-zinc-900 dark:text-white mt-6 mb-2">
          Leveraging Llama-3
        </h4>
        <p>
          Using the quantized versions of Meta&apos;s Llama-3 via vLLM allowed
          us to serve the model locally, maintaining strict data privacy
          compliance while keeping token generation speeds incredibly high.
        </p>
      </div>
    ),
  },
  {
    id: "b3",
    title: "Mixed Precision Training for NLP Models",
    date: "Dec 18, 2025",
    category: "Machine Learning",
    excerpt:
      "How implementing FP16 mixed precision can drastically reduce training time and memory footprint without sacrificing accuracy.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div className="space-y-4">
        <p>
          When fine-tuning large transformer models like RoBERTa for text
          classification, GPU VRAM is your most precious resource. Running out
          of memory (OOM) errors are the bane of every machine learning
          engineer&apos;s existence.
        </p>
        <h4 className="text-xl font-bold text-zinc-900 dark:text-white mt-6 mb-2">
          The Magic of FP16
        </h4>
        <p>
          By default, PyTorch uses 32-bit floating-point format (FP32). Mixed
          precision training leverages 16-bit format (FP16) for the majority of
          the operations, while keeping a 32-bit master weight copy for
          precision during the optimizer step.
        </p>
        <p>
          Implementing <code>torch.cuda.amp.autocast</code> cut our VRAM usage
          by almost 45%, allowing us to double the batch size. Consequently,
          the epoch training time was reduced by 30%, and the final ROC-AUC
          score remained identical at 98.97%. It is a literal free lunch in
          deep learning.
        </p>
      </div>
    ),
  },
];
