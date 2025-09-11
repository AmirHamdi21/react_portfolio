import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  index: number;
}

export const CertificateCard = ({
  title,
  issuer,
  date,
  credentialUrl,
  index,
}: CertificateCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-xl border border-neutral-300 dark:border-neutral-700 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
            <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
            {title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-2">
            {issuer}
          </p>
          {date && (
            <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-3">
              {date}
            </p>
          )}

          {credentialUrl ? (
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              View Credential
              <ExternalLink size={14} />
            </motion.a>
          ) : (
            <div className="text-sm text-neutral-500 dark:text-neutral-400 italic">
              Credential link will be added here
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};